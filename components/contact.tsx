"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Image from "next/image"
import { Send, Mail, MapPin, Check, X } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import { Spinner } from "@/components/ui/spinner"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const { toast } = useToast()
  const [isSending, setIsSending] = useState(false)
  const [status, setStatus] = useState<
    | { type: 'success' | 'error'; message: string }
    | null
  >(null)

  useEffect(() => {
    if (!status) return
    const t = setTimeout(() => setStatus(null), 4000)
    return () => clearTimeout(t)
  }, [status])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSending(true)
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      const data = await res.json().catch(() => ({}))

      if (!res.ok) {
        const errMsg = data?.error || 'Error enviando el mensaje'
        setStatus({ type: 'error', message: errMsg })
        toast({ title: 'Error', description: 'No se pudo enviar el mensaje. Intenta de nuevo.' })
        return
      }

      setStatus({ type: 'success', message: 'Correo enviado correctamente. Revisar bandeja.' })
      toast({ title: 'Mensaje enviado', description: 'Gracias — te responderé pronto.' })
      setFormData({ name: '', email: '', message: '' })
    } catch (err) {
      console.error(err)
      setStatus({ type: 'error', message: 'Error del servidor. Intenta más tarde.' })
      toast({ title: 'Error', description: 'No se pudo enviar el mensaje. Intenta de nuevo.' })
    } finally {
      setIsSending(false)
    }
  }

  return (
    <section id="contacto" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-medium tracking-wider uppercase">
            Hablemos
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">
            Ponte en Contacto
          </h2>
          <p className="text-muted-foreground mt-4 max-w-lg mx-auto">
            ¿Tienes un proyecto en mente? Me encantaría colaborar contigo. Envíame un mensaje
            y te responderé lo antes posible.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="p-6 rounded-2xl bg-card border border-border">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Image src="/whatsapp.svg" alt="WhatsApp" width={24} height={24} className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">WhatsApp</h3>
                  <p className="text-sm text-muted-foreground">Respuesta rápida</p>
                </div>
              </div>
              <Button
                className="w-full bg-[#25D366] hover:bg-[#25D366]/90 text-white"
                asChild
              >
                <a
                  href="https://wa.me/573243612538"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full"
                >
                  <Image src="/whatsapp.svg" alt="WhatsApp" width={16} height={16} className="w-4 h-4" />
                  Enviar Mensaje
                </a>
              </Button>
            </div>

            <div className="p-6 rounded-2xl bg-card border border-border">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Email</h3>
                  <p className="text-sm text-muted-foreground">jaidersenat@gmail.com</p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-card border border-border">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Ubicación</h3>
                  <p className="text-sm text-muted-foreground">Neiva, Colombia</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          {status ? (
            <div className="fixed top-6 right-6 z-50">
              <div
                role="status"
                className={`flex items-center gap-3 px-4 py-2 rounded-md text-sm font-medium shadow-md transition-opacity duration-300 max-w-xs ${
                  status.type === 'success' ? 'bg-green-600 text-white' : 'bg-red-600 text-white'
                }`}
              >
                {status.type === 'success' ? (
                  <Check className="w-4 h-4" />
                ) : (
                  <X className="w-4 h-4" />
                )}
                <div className="flex flex-col">
                  <span className="text-sm">
                    {status.type === 'success' ? 'Enviado' : 'Error'}
                  </span>
                  <span className="text-[12px] opacity-90 truncate">{status.message}</span>
                </div>
              </div>
            </div>
          ) : null}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                Nombre
              </label>
              <Input
                id="name"
                type="text"
                placeholder="Tu nombre"
                value={formData.name}
                onChange={(e) => {
                  setFormData({ ...formData, name: e.target.value })
                  setStatus(null)
                }}
                className="bg-card border-border focus:border-primary"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                Email
              </label>
              <Input
                id="email"
                type="email"
                placeholder="jaidersenat@gmail.com"
                value={formData.email}
                onChange={(e) => {
                  setFormData({ ...formData, email: e.target.value })
                  setStatus(null)
                }}
                className="bg-card border-border focus:border-primary"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                Mensaje
              </label>
              <Textarea
                id="message"
                placeholder="¿En qué puedo ayudarte?"
                rows={5}
                value={formData.message}
                onChange={(e) => {
                  setFormData({ ...formData, message: e.target.value })
                  setStatus(null)
                }}
                className="bg-card border-border focus:border-primary resize-none"
                required
              />
            </div>

            <Button
              type="submit"
              size="lg"
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90 flex items-center justify-center"
              disabled={isSending}
            >
              {isSending ? (
                <>
                  <Spinner className="mr-2" /> Enviando...
                </>
              ) : (
                <>
                  <Send className="mr-2 w-4 h-4" /> Enviar Mensaje
                </>
              )}
            </Button>
          </form>

          {/* Confirmation dialog removed — sends directly on submit */}
        </div>
      </div>
    </section>
  )
}
