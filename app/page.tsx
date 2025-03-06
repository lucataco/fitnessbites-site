import Link from "next/link";
import Image from "next/image";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { 
  Atom,
  BarChart, 
  Bell, 
  Heart, 
  Award, 
  Smartphone, 
  Download, 
  ChevronRight, 
  Star, 
  Apple, 
  Play
} from "lucide-react";
import { 
  Home as HomeIcon,
  History as HistoryIcon,
  HelpCircle as HelpIcon,
  Settings as SettingsIcon
} from "lucide-react";
import { websiteContent } from "./config/content";

export default function Home() {
  const { hero, featuresOverview, download, faq } = websiteContent;

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-screen-xl mx-auto">
            <div className="flex flex-col space-y-4">
              <Badge className="w-fit bg-accent/20 text-accent-foreground border-accent/30" variant="outline">
                {hero.badge}
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter">
                {hero.title}
              </h1>
              <p className="text-xl text-muted-foreground max-w-[600px]">
                {hero.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-4">
                <Button size="lg" variant="secondary" className="gap-2" asChild>
                  <Link href="https://apps.apple.com/app/fitnessbites" target="_blank" rel="noopener noreferrer" className="gap-2">
                    <Apple size={18} />
                    {hero.buttons.appStore}
                  </Link>
                </Button>
                <Button size="lg" variant="secondary" className="gap-2" asChild>
                  <Link href="https://play.google.com/store/apps/details?id=com.fitnessbites.app" target="_blank" rel="noopener noreferrer" className="gap-2">
                    <Play size={18} />
                    {hero.buttons.googlePlay}
                  </Link>
                </Button>
              </div>
            </div>

            <div className="flex justify-center items-center">
              <div className="relative h-[470px]">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[235px] h-[470px] bg-[#FF4820]/20 rounded-[48px] blur-xl" />
                <div className="relative z-10 w-[235px] h-[470px] bg-gradient-to-b from-neutral-800 to-neutral-900 rounded-[36px] p-1.5 ring-[6px] ring-neutral-900 shadow-xl">
                  {/* iPhone Notch */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[100px] h-[20px] bg-neutral-900 rounded-b-[16px] z-20" />
                  {/* Screen Content */}
                  <div className="relative w-full h-full bg-[#FF4820] rounded-[32px] p-5 text-white overflow-hidden">
                    <div className="flex flex-col h-full">
                      <div className="text-center">
                        <div className="space-y-1">
                          <h2 className="text-sm font-semibold">Hi, Joanne!</h2>
                          <p className="text-xs opacity-90">Ready for a quick workout?</p>
                        </div>
                        
                        <div className="space-y-1 mt-4">
                          <h3 className="text-lg font-bold">Plank on knees</h3>
                          <p className="text-xs">14 seconds</p>
                          <p className="text-[10px] opacity-90">Hold a push-up position with your knees on the ground</p>
                        </div>
                      </div>

                      <div className="flex-1 flex flex-col justify-center">
                        <div className="flex-1" />
                        <div className="flex justify-center">
                          <div className="w-10 h-10">
                            <Heart className="w-full h-full stroke-[1.5]" />
                          </div>
                        </div>
                        <div className="flex-1" />
                        <div className="space-y-2 mb-16">
                          <button className="w-full bg-white/10 hover:bg-white/20 text-white rounded-full py-2.5 px-3 text-xs font-medium transition-colors">
                            Start Timer
                          </button>

                          <button className="w-full bg-white/10 hover:bg-white/20 text-white rounded-full py-2.5 px-3 text-xs font-medium transition-colors">
                            Get a snack
                          </button>
                        </div>
                      </div>

                      <div className="absolute bottom-0 inset-x-0 bg-black/90 px-6 py-3">
                        <div className="flex justify-around items-center">
                          <div className="flex flex-col items-center gap-1">
                            <HomeIcon className="h-5 w-5" />
                            <span className="text-[10px]">Home</span>
                          </div>
                          <div className="flex flex-col items-center gap-1 opacity-50">
                            <HistoryIcon className="h-5 w-5" />
                            <span className="text-[10px]">History</span>
                          </div>
                          <div className="flex flex-col items-center gap-1 opacity-50">
                            <HelpIcon className="h-5 w-5" />
                            <span className="text-[10px]">FAQ</span>
                          </div>
                          <div className="flex flex-col items-center gap-1 opacity-50">
                            <SettingsIcon className="h-5 w-5" />
                            <span className="text-[10px]">Settings</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Overview */}
      <section className="py-20 bg-muted">
        <div className="container">
          <div className="max-w-screen-xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                {featuresOverview.title}
              </h2>
              <p className="text-xl text-muted-foreground max-w-[800px] mx-auto">
                {featuresOverview.description}
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuresOverview.features.map((feature, index) => {
                const icons = [Atom, Heart, Bell, BarChart];
                const Icon = icons[index];
                return (
                  <Card key={feature.title}>
                    <CardHeader className="pb-2">
                      <Icon className="h-12 w-12 text-primary mb-4" />
                      <CardTitle>{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section id="download" className="py-20 bg-accent/30 text-accent-foreground">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-screen-xl mx-auto">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                {download.title}
              </h2>
              <p className="text-xl opacity-90 mb-8">
                {download.description}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" variant="secondary" className="gap-2 border-primary border-2" asChild>
                  <Link href="https://apps.apple.com/app/fitnessbites" target="_blank" rel="noopener noreferrer">
                    <Apple className="h-5 w-5 text-primary" />
                    {hero.buttons.appStore}
                  </Link>
                </Button>
                <Button size="lg" variant="secondary" className="gap-2 border-primary border-2" asChild>
                  <Link href="https://play.google.com/store/apps/details?id=com.fitnessbites.app" target="_blank" rel="noopener noreferrer">
                    <Play className="h-5 w-5 text-primary" />
                    {hero.buttons.googlePlay}
                  </Link>
                </Button>
              </div>
              
              <div className="mt-8 flex items-center">
                <div className="flex items-center">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="ml-2 text-sm opacity-90">
                  {download.rating.score} {download.rating.text}
                </p>
              </div>
            </div>
            
            {/* App Preview */}
            <div className="relative h-[470px] flex justify-center items-center">
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[235px] h-[470px] bg-[#0C7489]/20 rounded-[48px] blur-xl" />
              <div className="relative z-10 w-[235px] h-[470px] bg-gradient-to-b from-neutral-800 to-neutral-900 rounded-[36px] p-1.5 ring-[6px] ring-neutral-900 shadow-xl">
                {/* iPhone Notch */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[100px] h-[20px] bg-neutral-900 rounded-b-[16px] z-20" />
                {/* Screen Content */}
                <div className="relative w-full h-full bg-[#0C7489] rounded-[32px] p-5 text-white overflow-hidden">
                  <div className="flex flex-col h-full">
                    <div className="text-center">
                      <div className="space-y-1">
                        <h3 className="text-sm font-semibold">Hi, Joanne!</h3>
                        <p className="text-xs opacity-90">Ready for a quick workout?</p>
                      </div>
                      
                      <div className="space-y-1 mt-4">
                        <h4 className="text-lg font-bold">Arm circles</h4>
                        <p className="text-xs">18 seconds</p>
                        <p className="text-[10px] opacity-90">Stand with arms extended to the sides and rotate them in circles</p>
                      </div>
                    </div>

                    <div className="flex-1 flex flex-col">
                      <div className="flex-1" />
                      <div className="flex justify-center">
                        <div className="w-10 h-10">
                          <Heart className="w-full h-full stroke-[1.5]" />
                        </div>
                      </div>
                      <div className="flex-1" />
                      <div className="space-y-2 mb-16">
                        <button className="w-full bg-white/10 hover:bg-white/20 text-white rounded-full py-2.5 px-3 text-xs font-medium transition-colors">
                          Start Timer
                        </button>

                        <button className="w-full bg-white/10 hover:bg-white/20 text-white rounded-full py-2.5 px-3 text-xs font-medium transition-colors">
                          Get a snack
                        </button>
                      </div>
                    </div>

                    <div className="absolute bottom-0 inset-x-0 bg-black/90 px-6 py-3">
                      <div className="flex justify-around items-center">
                        <div className="flex flex-col items-center gap-1">
                          <HomeIcon className="h-5 w-5" />
                          <span className="text-[10px]">Home</span>
                        </div>
                        <div className="flex flex-col items-center gap-1 opacity-50">
                          <HistoryIcon className="h-5 w-5" />
                          <span className="text-[10px]">History</span>
                        </div>
                        <div className="flex flex-col items-center gap-1 opacity-50">
                          <HelpIcon className="h-5 w-5" />
                          <span className="text-[10px]">FAQ</span>
                        </div>
                        <div className="flex flex-col items-center gap-1 opacity-50">
                          <SettingsIcon className="h-5 w-5" />
                          <span className="text-[10px]">Settings</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-muted/50">
        <div className="container">
          <div className="max-w-screen-xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                {faq.title}
              </h2>
              <p className="text-xl text-muted-foreground max-w-[800px] mx-auto">
                {faq.description}
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {faq.questions.map((item) => (
                <Card key={item.question}>
                  <CardHeader>
                    <CardTitle>{item.question}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{item.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}