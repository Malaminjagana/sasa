import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { HiMicrophone, HiSpeakerphone, HiArrowLeft } from 'react-icons/hi'
import { getSoninkeResponse } from '../data/soninkeResponses'

const STATUS_LABELS = {
  inactive: 'Microphone inactive',
  listening: 'Listening...',
  processing: 'Processing request...',
  response: 'Response received',
  error: 'Error',
}

export default function SoninkeAssistant() {
  const navigate = useNavigate()
  const [status, setStatus] = useState('inactive')
  const [error, setError] = useState('')
  const [speechSupported, setSpeechSupported] = useState(true)
  const [transcript, setTranscript] = useState('')
  const [conversation, setConversation] = useState([])
  const recognitionRef = useRef(null)

  const greetingText = 'Hey maremmeh... lee kalisi... warah sasa sasa kundu... and soroh nakitah... sasa sasa kundu...'

  const speakGreeting = () => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
      return Promise.resolve()
    }

    return new Promise((resolve) => {
      const utterance = new SpeechSynthesisUtterance(greetingText)
      utterance.lang = 'en-US'
      utterance.rate = 0.75
      utterance.volume = 1
      utterance.onend = () => resolve()
      utterance.onerror = () => resolve()
      window.speechSynthesis.speak(utterance)
    })
  }

  useEffect(() => {
    if (typeof window === 'undefined') {
      setSpeechSupported(false)
      return
    }

    const isSecure = window.isSecureContext || window.location.protocol === 'https:'
    const hasRecognition = 'SpeechRecognition' in window || 'webkitSpeechRecognition' in window
    const hasMediaDevices = !!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia)
    const hasTTS = 'speechSynthesis' in window

    if (!isSecure || !hasRecognition || !hasMediaDevices || !hasTTS) {
      setSpeechSupported(false)
      return
    }

    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
    const recognition = new SpeechRecognition()
    recognition.lang = 'en-US'
    recognition.interimResults = false
    recognition.maxAlternatives = 1

    recognition.onstart = () => {
      setStatus('listening')
      setError('')
    }

    recognition.onresult = async (event) => {
      const spoken = event.results[0]?.[0]?.transcript || ''
      setTranscript(spoken)
      setConversation((prev) => [...prev, { role: 'user', text: spoken }])
      setStatus('processing')

      try {
        const aiResponse = await getSoninkeResponse(spoken)
        setConversation((prev) => [
          ...prev,
          {
            role: 'assistant',
            text: aiResponse.transliteration,
            id: aiResponse.id,
            audioFile: aiResponse.audioFile,
          },
        ])
        setStatus('response')
      } catch (err) {
        setError('Unable to process the request. Please try again.')
        setStatus('error')
      }
    }

    recognition.onerror = (event) => {
      const message =
        event.error === 'not-allowed'
          ? 'Microphone permission denied.'
          : event.error === 'no-speech'
          ? 'No speech detected. Try again.'
          : 'Speech recognition error. Please try again.'
      setError(message)
      setStatus('error')
    }

    recognition.onend = () => {
      setStatus((current) => (current === 'listening' ? 'inactive' : current))
    }

    recognitionRef.current = recognition

    return () => {
      recognition.stop?.()
      if (recognitionRef.current) {
        recognitionRef.current = null
      }
    }
  }, [])

  const requestMicrophoneAccess = async () => {
    if (typeof navigator === 'undefined' || !navigator.mediaDevices?.getUserMedia) {
      throw new Error('Microphone access is not available.')
    }

    const stream = await navigator.mediaDevices.getUserMedia({ audio: true })
    if (stream) {
      stream.getTracks().forEach((track) => track.stop())
    }
    return true
  }

  const handleToggleMic = async () => {
    if (!speechSupported) {
      setError('Speech recognition is not supported in this browser or on this site.')
      setStatus('error')
      return
    }

    if (status === 'listening') {
      recognitionRef.current?.stop()
      setStatus('inactive')
      return
    }

    try {
      await requestMicrophoneAccess()
      setConversation((prev) => [
        ...prev,
        { role: 'assistant', text: greetingText, id: `greeting-${Date.now()}` },
      ])
      await speakGreeting()
      recognitionRef.current?.start()
    } catch (err) {
      const message = err.name === 'NotAllowedError' || err.name === 'NotFoundError'
        ? 'Microphone permission required. Please allow access and try again.'
        : 'Unable to access the microphone. Please use a secure HTTPS connection.'
      setError(message)
      setStatus('error')
    }
  }

  const handleBack = () => navigate('/')

  const statusText = STATUS_LABELS[status] || 'Microphone inactive'
  const statusColor =
    status === 'listening' ? 'text-[#29B7F4]' : status === 'processing' ? 'text-[#C2242B]' : status === 'error' ? 'text-[#C2242B]' : 'text-gray-400'

  return (
    <section className="min-h-screen bg-[#0D1117] text-white pt-28 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <button
          onClick={handleBack}
          className="inline-flex items-center gap-2 text-sm text-[#29B7F4] hover:text-white mb-6"
        >
          <HiArrowLeft size={18} />
          Back to Home
        </button>

        <div className="glass-card rounded-3xl border border-[#29B7F4]/30 p-8 shadow-xl">
          <div className="relative text-center">
            <p className="text-[#29B7F4] uppercase text-xs tracking-widest mb-3">Web Center</p>
            <h1 className="font-display text-4xl sm:text-5xl font-bold">Soninke Assistant</h1>
            <p className="mt-4 text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Use your microphone to speak naturally. The assistant listens, processes your request, and responds in Soninke transliteration.
            </p>

            <div className="mt-10 flex flex-col items-center gap-4">
              <motion.button
                whileTap={{ scale: 0.96 }}
                whileHover={{ scale: 1.02 }}
                onClick={handleToggleMic}
                className={`flex items-center justify-center rounded-full p-6 shadow-2xl transition-all ${
                  status === 'listening'
                    ? 'bg-[#29B7F4] text-black shadow-[#29B7F4]/30'
                    : 'bg-[#111827] text-white hover:bg-[#1e2a39]'
                }`}
              >
                <HiMicrophone size={32} />
              </motion.button>

              <div className="flex flex-col items-center gap-2">
                <span className={`uppercase text-xs tracking-widest ${statusColor}`}>
                  {statusText}
                </span>
                <span className="text-sm text-gray-500">
                  {status === 'inactive'
                    ? 'Tap the mic to start speaking.'
                    : status === 'listening'
                    ? 'Listening now. Speak clearly into your microphone.'
                    : status === 'processing'
                    ? 'Generating the Soninke response...'
                    : status === 'response'
                    ? 'Response ready below.'
                    : ''}
                </span>
              </div>

              {error && <div className="text-sm text-[#C2242B]">{error}</div>}
            </div>
          </div>

          <div className="space-y-6 mt-12">
            <div className="rounded-3xl bg-[#111827] p-6 border border-white/10">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
                <h2 className="text-sm uppercase tracking-wider text-gray-400">Conversation</h2>
                <span className="text-xs uppercase tracking-wider text-gray-500">
                  Soninke transliteration
                </span>
              </div>

              <div className="space-y-4 max-h-[420px] overflow-y-auto pr-2">
                {conversation.length === 0 ? (
                  <div className="text-gray-500">Your Soninke assistant transcript appears here.</div>
                ) : (
                  conversation.map((item, index) => (
                    <div
                      key={`${item.role}-${index}`}
                      className={`rounded-3xl p-4 ${
                        item.role === 'user'
                          ? 'bg-[#29B7F4]/10 ml-auto max-w-[85%] text-white'
                          : 'bg-[#1F2937]/90 max-w-[95%] text-gray-100'
                      }`}
                    >
                      <div className="text-xs uppercase tracking-wider text-gray-400 mb-2">
                        {item.role === 'user' ? 'You' : 'Assistant'}
                      </div>
                      <div>{item.text}</div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
