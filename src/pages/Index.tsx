import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [formData, setFormData] = useState({ name: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Спасибо! Мы свяжемся с вами в ближайшее время.");
    setFormData({ name: "", phone: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold text-primary">РемонтЭлит</div>
          <div className="hidden md:flex gap-6">
            <a href="#services" className="text-foreground hover:text-accent transition-colors">Услуги</a>
            <a href="#about" className="text-foreground hover:text-accent transition-colors">О компании</a>
            <a href="#reviews" className="text-foreground hover:text-accent transition-colors">Отзывы</a>
            <a href="#faq" className="text-foreground hover:text-accent transition-colors">FAQ</a>
            <a href="#contacts" className="text-foreground hover:text-accent transition-colors">Контакты</a>
          </div>
          <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
            <Icon name="Phone" className="mr-2" size={18} />
            +7 (343) 555-55-55
          </Button>
        </nav>
      </header>

      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://cdn.poehali.dev/projects/360b1998-f78f-46ee-91cb-8af051025f36/files/d62743d4-9121-4515-beba-3ae6de16f16d.jpg"
            alt="Интерьер после ремонта"
            className="w-full h-full object-cover opacity-10"
          />
        </div>
        <div className="container mx-auto text-center animate-fade-in relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold text-primary mb-6">
            Быстрый косметический ремонт<br />
            <span className="text-accent">в Екатеринбурге</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Профессиональный ремонт квартир в сжатые сроки. Качество премиум-класса по разумной цене.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8 py-6">
              Получить расчёт
              <Icon name="ArrowRight" className="ml-2" size={20} />
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6">
              <Icon name="Play" className="mr-2" size={20} />
              Наши работы
            </Button>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4 bg-secondary">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-primary">Наши услуги</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">Быстрый и качественный ремонт под ключ</p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: "PaintBucket", title: "Покраска стен", desc: "Идеально ровное покрытие в любой цвет за 2-3 дня", price: "от 350 ₽/м²" },
              { icon: "Pipette", title: "Поклейка обоев", desc: "Работа с любыми видами обоев, без пузырей и стыков", price: "от 400 ₽/м²" },
              { icon: "Layers", title: "Ламинат и паркет", desc: "Укладка напольных покрытий с гарантией 3 года", price: "от 500 ₽/м²" },
              { icon: "Droplet", title: "Сантехнические работы", desc: "Замена труб, установка сантехники быстро", price: "от 2000 ₽" },
              { icon: "Lightbulb", title: "Электрика", desc: "Монтаж проводки, розеток, выключателей", price: "от 1500 ₽" },
              { icon: "Sparkles", title: "Декоративная отделка", desc: "Лепнина, молдинги, декоративная штукатурка", price: "от 800 ₽/м²" }
            ].map((service, idx) => (
              <Card key={idx} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-scale-in border-border" style={{ animationDelay: `${idx * 0.1}s` }}>
                <CardContent className="p-6">
                  <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                    <Icon name={service.icon as any} className="text-accent" size={28} />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-primary">{service.title}</h3>
                  <p className="text-muted-foreground mb-4">{service.desc}</p>
                  <p className="text-accent font-semibold text-lg">{service.price}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-primary">Почему выбирают нас</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: "Zap", title: "Быстро", desc: "Ремонт за 5-7 дней" },
              { icon: "Shield", title: "Гарантия", desc: "До 3 лет на все работы" },
              { icon: "Award", title: "Опыт", desc: "Более 500 проектов" },
              { icon: "Wallet", title: "Честная цена", desc: "Без скрытых доплат" }
            ].map((item, idx) => (
              <div key={idx} className="text-center animate-fade-in" style={{ animationDelay: `${idx * 0.15}s` }}>
                <div className="w-20 h-20 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <Icon name={item.icon as any} className="text-accent" size={36} />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-primary">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20 px-4 bg-secondary">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-primary">Отзывы клиентов</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: "Анна Петрова", text: "Сделали ремонт за 5 дней! Качество на высоте, бригада вежливая и аккуратная. Рекомендую!", rating: 5 },
              { name: "Дмитрий Иванов", text: "Отличное соотношение цены и качества. Поменяли обои во всей квартире, всё идеально ровно.", rating: 5 },
              { name: "Елена Смирнова", text: "Профессионалы своего дела! Покрасили стены, сделали декоративную отделку - выглядит шикарно.", rating: 5 }
            ].map((review, idx) => (
              <Card key={idx} className="animate-scale-in border-border" style={{ animationDelay: `${idx * 0.1}s` }}>
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" className="text-accent fill-accent" size={20} />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">"{review.text}"</p>
                  <p className="font-semibold text-primary">{review.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="py-20 px-4">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-primary">Вопросы и ответы</h2>
          
          <Accordion type="single" collapsible className="space-y-4">
            {[
              { q: "За какой срок вы делаете косметический ремонт?", a: "В среднем косметический ремонт квартиры занимает 5-7 рабочих дней. Точные сроки зависят от объёма работ и площади помещения." },
              { q: "Какие материалы вы используете?", a: "Мы работаем только с проверенными производителями: Dulux, Tikkurila, Knauf. Возможна работа с материалами заказчика." },
              { q: "Предоставляете ли вы гарантию?", a: "Да, на все виды работ предоставляется гарантия от 1 до 3 лет в зависимости от типа работ." },
              { q: "Делаете ли вы уборку после ремонта?", a: "Да, финальная уборка входит в стоимость услуг. Мы сдаём объект в чистом виде, готовым к заселению." },
              { q: "Как происходит оплата?", a: "Оплата поэтапная: 30% аванс, 40% после завершения основных работ, 30% после сдачи объекта." }
            ].map((item, idx) => (
              <AccordionItem key={idx} value={`item-${idx}`} className="border border-border rounded-lg px-6 bg-card">
                <AccordionTrigger className="text-left font-semibold text-primary hover:text-accent">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section id="contacts" className="py-20 px-4 bg-secondary">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-primary">Свяжитесь с нами</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">Оставьте заявку и получите бесплатный расчёт стоимости</p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-border">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-primary">Ваше имя</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-accent bg-background text-foreground"
                      placeholder="Иван Иванов"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-primary">Телефон</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-accent bg-background text-foreground"
                      placeholder="+7 (999) 123-45-67"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-primary">Сообщение</label>
                    <textarea
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={4}
                      className="w-full px-4 py-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-accent bg-background text-foreground"
                      placeholder="Расскажите о вашем проекте..."
                    />
                  </div>
                  <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                    Отправить заявку
                    <Icon name="Send" className="ml-2" size={18} />
                  </Button>
                </form>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <Card className="border-border">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Icon name="Phone" className="text-accent" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1 text-primary">Телефон</h3>
                      <p className="text-muted-foreground">+7 (343) 555-55-55</p>
                      <p className="text-sm text-muted-foreground">Ежедневно с 9:00 до 21:00</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Icon name="Mail" className="text-accent" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1 text-primary">Email</h3>
                      <p className="text-muted-foreground">info@remontelit.ru</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Icon name="MapPin" className="text-accent" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1 text-primary">Адрес</h3>
                      <p className="text-muted-foreground">г. Екатеринбург,<br />ул. Ленина, д. 52</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-8 px-4 border-t border-border">
        <div className="container mx-auto text-center text-muted-foreground">
          <p className="text-sm">© 2024 РемонтЭлит. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;