"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "./button"
import { Input } from "./input"
import { Label } from "./label"
import { Checkbox } from "./checkbox"
import { Link } from "react-router-dom"
import { Eye, EyeOff, User, Lock, Loader2, Facebook, Twitter, Shield, Heart } from "lucide-react"
import { cn } from "@/lib/utils"
import sheep from "../../../public/assets/sheep.png"

interface AuthFormProps {
  mode: "login" | "register"
}

export const AuthForm = ({ mode }: AuthFormProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    adminCode: "",
    rememberMe: false,
  })
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})

  const isLogin = mode === "login"

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!isLogin && !formData.name) {
      newErrors.name = "Administrator name is required"
    }

    if (!formData.email) {
      newErrors.email = "Email is required"
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email"
    }

    if (!formData.password) {
      newErrors.password = "Password is required"
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters"
    }

    if (!isLogin && !formData.adminCode) {
      newErrors.adminCode = "Administrator verification code is required"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) return

    setLoading(true)

    try {
      await new Promise((resolve) => setTimeout(resolve, 2000))
      console.log({ mode, formData })
    } catch (error) {
      console.error("Auth error:", error)
    } finally {
      setLoading(false)
    }
  }

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }))
    }
  }

  const handleSocialLogin = (provider: string) => {
    console.log(`Admin login with ${provider}`)
  }

  return (
    <div className="min-h-screen flex">
      <div
        className="hidden lg:flex lg:w-1/2 relative overflow-hidden"
        style={{ background: "var(--gradient-subtle)" }}
      >
        <div className="absolute inset-0 flex items-center justify-center p-12">
          <div className="relative max-w-md text-center">
            {isLogin ? (
              <div className="relative mb-8">
                <div
                  className="w-80 h-80 rounded-full flex items-center justify-center mx-auto relative overflow-hidden border-4 border-white/20"
                  style={{ background: "var(--gradient-primary)" }}
                >
                  <img
                    src={sheep || "/placeholder.svg"}
                    alt="Sheep for Eid al-Adha donations"
                    className="w-64 h-64 object-cover rounded-full"
                    style={{ filter: "brightness(1.1) contrast(1.1)" }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-full"></div>

        
        
                </div>

                <div className="absolute -top-4 -right-4 w-8 h-8 rounded-full bg-accent/20 animate-pulse"></div>
                <div className="absolute -bottom-6 -left-6 w-6 h-6 rounded-full bg-primary/20 animate-pulse delay-1000"></div>
              </div>
            ) : (
              <div className="relative mb-8">
                <div className="relative w-80 h-80 mx-auto rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src={sheep || "/placeholder.svg"}
                    alt="Eid al-Adha sheep for administrator registration"
                    className="w-full h-full object-cover"
                    style={{ filter: "sepia(5%) saturate(110%) brightness(1.05)" }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>

          
                </div>

                <div className="absolute -top-4 -right-4 w-8 h-8 rounded-full bg-accent/20 animate-pulse"></div>
                <div className="absolute -bottom-6 -left-6 w-6 h-6 rounded-full bg-primary/20 animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 -left-8 w-4 h-4 rounded-full bg-accent/30 animate-ping delay-500"></div>
              </div>
            )}

            <div className="space-y-4 text-center">
              <h2 className="text-3xl font-bold text-primary">إدارة التبرعات</h2>
              <h3 className="text-xl font-semibold text-foreground">
                {isLogin ? "Sheep Donation Management" : "Administrator Registration"}
              </h3>
              <p className="text-muted-foreground leading-relaxed max-w-sm mx-auto">
                {isLogin
                  ? "Transparent administration of sheep donations for Eid al-Adha. Ensuring every donation reaches those in need with complete accountability."
                  : "Join our administrative team to manage and oversee the transparent distribution of sheep donations during Eid al-Adha."}
              </p>
              <div className="flex items-center justify-center space-x-2 text-sm text-primary/80">
                <Shield className="w-4 h-4" />
                <span>Secure & Transparent</span>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute top-0 left-0 w-full h-full opacity-8">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='islamic-pattern' x='0' y='0' width='60' height='60' patternUnits='userSpaceOnUse'%3E%3Cg fill='none' stroke='%23059669' strokeWidth='0.5' opacity='0.3'%3E%3Cpath d='M30 0L60 30L30 60L0 30z'/%3E%3Cpath d='M30 15L45 30L30 45L15 30z'/%3E%3Ccircle cx='30' cy='30' r='8'/%3E%3Cpath d='M30 22L38 30L30 38L22 30z'/%3E%3C/g%3E%3C/pattern%3E%3C/defs%3E%3Crect width='120' height='120' fill='url(%23islamic-pattern)'/%3E%3C/svg%3E")`,
              backgroundSize: "120px 120px",
            }}
          ></div>
        </div>

        <div className="absolute top-20 left-20 opacity-20">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M12 2L14.09 8.26L20 10L14.09 11.74L12 18L9.91 11.74L4 10L9.91 8.26L12 2Z"
              fill="currentColor"
              className="text-accent animate-pulse"
            />
          </svg>
        </div>
        <div className="absolute bottom-32 right-16 opacity-15">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M12 2L14.09 8.26L20 10L14.09 11.74L12 18L9.91 11.74L4 10L9.91 8.26L12 2Z"
              fill="currentColor"
              className="text-primary animate-pulse delay-1000"
            />
          </svg>
        </div>
        <div className="absolute top-1/2 right-8 opacity-10">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M12 2L14.09 8.26L20 10L14.09 11.74L12 18L9.91 11.74L4 10L9.91 8.26L12 2Z"
              fill="currentColor"
              className="text-accent animate-pulse delay-500"
            />
          </svg>
        </div>
      </div>

      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-background">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center space-y-4">
            <div
              className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 relative overflow-hidden"
              style={{ background: isLogin ? "var(--gradient-primary)" : "var(--gradient-accent)" }}
            >
              {isLogin ? (
                <img
                  src={sheep || "/placeholder.svg"}
                  alt="Sheep icon"
                  className="w-12 h-12 object-cover rounded-full"
                />
              ) : (
                <Shield className="w-8 h-8 text-white" />
              )}
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
            </div>
            <h1 className="text-3xl font-bold text-foreground">
              {isLogin ? "Administrator Login" : "Admin Registration"}
            </h1>
            <p className="text-muted-foreground">
              {isLogin
                ? "Access the sheep donation management dashboard"
                : "Create an administrator account to manage sheep donations and ensure transparency"}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {!isLogin && (
              <div className="space-y-2">
                <Label htmlFor="name" className="text-sm font-medium text-foreground">
                  Administrator Name
                </Label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <Input
                    id="name"
                    placeholder="Enter administrator full name"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    className={cn(
                      "pl-10 h-12 text-base border-2 transition-all duration-300",
                      "focus:border-accent focus:ring-2 focus:ring-accent/20",
                      errors.name && "border-destructive focus:border-destructive focus:ring-destructive/20",
                    )}
                  />
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                    <div className="w-5 h-5 rounded border-2 border-muted-foreground/30"></div>
                  </div>
                </div>
                {errors.name && <p className="text-sm text-destructive">{errors.name}</p>}
              </div>
            )}

            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-medium text-foreground">
                {isLogin ? "Email or Username" : "Administrator Email"}
              </Label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  id="email"
                  type="email"
                  placeholder={isLogin ? "Enter your email or username" : "Enter administrator email"}
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  className={cn(
                    "pl-10 h-12 text-base border-2 transition-all duration-300",
                    isLogin
                      ? "focus:border-primary focus:ring-2 focus:ring-primary/20"
                      : "focus:border-accent focus:ring-2 focus:ring-accent/20",
                    errors.email && "border-destructive focus:border-destructive focus:ring-destructive/20",
                  )}
                />
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                  <div className="w-5 h-5 rounded border-2 border-muted-foreground/30"></div>
                </div>
              </div>
              {errors.email && <p className="text-sm text-destructive">{errors.email}</p>}
            </div>

            {!isLogin && (
              <div className="space-y-2">
                <Label htmlFor="adminCode" className="text-sm font-medium text-foreground">
                  Administrator Verification Code
                </Label>
                <div className="relative">
                  <Shield className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <Input
                    id="adminCode"
                    type="password"
                    placeholder="Enter admin verification code"
                    value={formData.adminCode}
                    onChange={(e) => handleInputChange("adminCode", e.target.value)}
                    className={cn(
                      "pl-10 h-12 text-base border-2 transition-all duration-300",
                      "focus:border-accent focus:ring-2 focus:ring-accent/20",
                      errors.adminCode && "border-destructive focus:border-destructive focus:ring-destructive/20",
                    )}
                  />
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                    <div className="w-5 h-5 rounded border-2 border-muted-foreground/30"></div>
                  </div>
                </div>
                {errors.adminCode && <p className="text-sm text-destructive">{errors.adminCode}</p>}
                <p className="text-xs text-muted-foreground">
                  Contact the system administrator to obtain this verification code.
                </p>
              </div>
            )}

            <div className="space-y-2">
              <Label htmlFor="password" className="text-sm font-medium text-foreground">
                Password
              </Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={(e) => handleInputChange("password", e.target.value)}
                  className={cn(
                    "pl-10 pr-12 h-12 text-base border-2 transition-all duration-300",
                    isLogin
                      ? "focus:border-primary focus:ring-2 focus:ring-primary/20"
                      : "focus:border-accent focus:ring-2 focus:ring-accent/20",
                    errors.password && "border-destructive focus:border-destructive focus:ring-destructive/20",
                  )}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className={cn(
                    "absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground transition-colors",
                    isLogin ? "hover:text-primary" : "hover:text-accent",
                  )}
                >
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
              {errors.password && <p className="text-sm text-destructive">{errors.password}</p>}
              {!isLogin && (
                <p className="text-xs text-muted-foreground">
                  Password must be at least 8 characters for administrator accounts.
                </p>
              )}
            </div>

            {isLogin && (
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="remember"
                  checked={formData.rememberMe}
                  onCheckedChange={(checked) => handleInputChange("rememberMe", checked as boolean)}
                  className="border-2 border-muted-foreground/30 data-[state=checked]:bg-primary data-[state=checked]:border-primary"
                />
                <Label htmlFor="remember" className="text-sm text-muted-foreground cursor-pointer">
                  Remember me
                </Label>
              </div>
            )}

            <Button
              type="submit"
              disabled={loading}
              className="w-full h-12 text-base font-medium rounded-lg transition-all duration-300 transform hover:scale-[1.02]"
              style={{
                background: isLogin ? "var(--gradient-primary)" : "var(--gradient-accent)",
                boxShadow: "var(--shadow-card)",
              }}
            >
              {loading ? (
                <>
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  {isLogin ? "Signing In..." : "Creating Admin Account..."}
                </>
              ) : isLogin ? (
                "Access Dashboard"
              ) : (
                "Create Administrator Account"
              )}
            </Button>
          </form>

          <div className="space-y-4">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-border" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="bg-background px-4 text-muted-foreground">
                  Or {isLogin ? "login" : "register"} with
                </span>
              </div>
            </div>

            <div className="flex justify-center space-x-4">
              <button
                type="button"
                onClick={() => handleSocialLogin("facebook")}
                className="w-12 h-12 rounded-full bg-blue-600 hover:bg-blue-700 flex items-center justify-center transition-colors"
              >
                <Facebook className="h-5 w-5 text-white" />
              </button>
              <button
                type="button"
                onClick={() => handleSocialLogin("twitter")}
                className="w-12 h-12 rounded-full bg-sky-500 hover:bg-sky-600 flex items-center justify-center transition-colors"
              >
                <Twitter className="h-5 w-5 text-white" />
              </button>
              <button
                type="button"
                onClick={() => handleSocialLogin("google")}
                className="w-12 h-12 rounded-full bg-red-500 hover:bg-red-600 flex items-center justify-center transition-colors"
              >
                <span className="text-white font-bold text-sm">G</span>
              </button>
            </div>
          </div>

          <div className="text-center">
            <p className="text-sm text-muted-foreground">
              {isLogin ? (
                <>
                  Need administrator access?{" "}
                  <Link
                    to="/register"
                    className="font-medium text-accent hover:text-accent/80 transition-colors underline"
                  >
                    Request admin account
                  </Link>
                </>
              ) : (
                <>
                  Already have an administrator account?{" "}
                  <Link
                    to="/login"
                    className="font-medium text-primary hover:text-primary/80 transition-colors underline"
                  >
                    Sign in here
                  </Link>
                </>
              )}
            </p>
          </div>

          <div className="text-center">
            <div className="inline-flex items-center space-x-2 text-xs text-muted-foreground bg-muted/50 px-3 py-2 rounded-lg">
              <Shield className="w-3 h-3" />
              <span>
                {isLogin
                  ? "Secure administrator access to donation management system"
                  : "Administrator registration requires verification code"}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
