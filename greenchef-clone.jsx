import React, { useState, useEffect } from 'react';
import { ChefHat, Leaf, Clock, Star, ArrowRight, Check, X } from 'lucide-react';

export default function MissionKitchen() {
  const [selectedPlan, setSelectedPlan] = useState('balanced');
  const [servings, setServings] = useState(2);
  const [mealsPerWeek, setMealsPerWeek] = useState(3);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const plans = [
    {
      id: 'balanced',
      name: 'Balanced Living',
      description: 'Well-rounded meals with organic produce and premium proteins',
      color: '#7C9C5E',
      icon: '🥗'
    },
    {
      id: 'keto',
      name: 'Keto & Paleo',
      description: 'Low-carb, high-protein meals to fuel your lifestyle',
      color: '#D97941',
      icon: '🥩'
    },
    {
      id: 'plant',
      name: 'Plant Powered',
      description: 'Vibrant vegetarian and vegan options bursting with flavor',
      color: '#6B9B6E',
      icon: '🌱'
    },
    {
      id: 'quick',
      name: 'Quick & Easy',
      description: 'Delicious meals ready in 25 minutes or less',
      color: '#E8A45C',
      icon: '⚡'
    }
  ];

  const meals = [
    {
      name: 'Herb-Crusted Salmon',
      time: '35 min',
      rating: 4.8,
      tags: ['High Protein', 'Omega-3'],
      image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=800&q=80'
    },
    {
      name: 'Mediterranean Chickpea Bowl',
      time: '25 min',
      rating: 4.9,
      tags: ['Plant-Based', 'High Fiber'],
      image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&q=80'
    },
    {
      name: 'Grass-Fed Beef Tacos',
      time: '30 min',
      rating: 4.7,
      tags: ['Keto-Friendly', 'Gluten-Free'],
      image: 'https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=800&q=80'
    },
    {
      name: 'Thai Coconut Curry',
      time: '28 min',
      rating: 4.9,
      tags: ['Vegan', 'Dairy-Free'],
      image: 'https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=800&q=80'
    }
  ];

  const benefits = [
    'USDA certified organic ingredients',
    'Carbon offset shipping',
    'Recyclable & compostable packaging',
    'No artificial preservatives',
    'Expertly portioned ingredients',
    'Step-by-step recipe cards'
  ];

  const calculatePrice = () => {
    const basePrice = servings === 2 ? 11.99 : 9.99;
    return (basePrice * mealsPerWeek).toFixed(2);
  };

  return (
    <div style={{
      fontFamily: '"Cormorant Garamond", "Playfair Display", Georgia, serif',
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #F7F4ED 0%, #E8E3D6 100%)',
      overflowX: 'hidden'
    }}>
      {/* Hero Section */}
      <header style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        background: 'linear-gradient(165deg, #4A6741 0%, #7C9C5E 50%, #A8C090 100%)',
      }}>
        {/* Decorative elements */}
        <div style={{
          position: 'absolute',
          top: '10%',
          right: '5%',
          width: '300px',
          height: '300px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)',
          animation: 'float 6s ease-in-out infinite',
        }} />
        <div style={{
          position: 'absolute',
          bottom: '15%',
          left: '8%',
          width: '200px',
          height: '200px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255,255,255,0.08) 0%, transparent 70%)',
          animation: 'float 8s ease-in-out infinite',
          animationDelay: '1s'
        }} />

        {/* Navigation */}
        <nav style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          padding: '2rem 4rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          zIndex: 10,
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(-20px)',
          transition: 'all 0.8s ease-out'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            color: '#FFF',
            fontSize: '1.8rem',
            fontWeight: '600',
            letterSpacing: '-0.02em'
          }}>
            <Leaf size={32} strokeWidth={2.5} />
            <span>The Mission Kitchen</span>
          </div>
          <div style={{
            display: 'flex',
            gap: '2.5rem',
            color: '#FFF',
            fontSize: '1.05rem',
            fontFamily: '"Quicksand", sans-serif'
          }}>
            <a href="#plans" style={{ color: '#FFF', textDecoration: 'none', opacity: 0.9, transition: 'opacity 0.3s' }}>Plans</a>
            <a href="#how" style={{ color: '#FFF', textDecoration: 'none', opacity: 0.9, transition: 'opacity 0.3s' }}>How It Works</a>
            <a href="#menu" style={{ color: '#FFF', textDecoration: 'none', opacity: 0.9, transition: 'opacity 0.3s' }}>Menu</a>
            <button style={{
              background: 'rgba(255,255,255,0.25)',
              color: '#FFF',
              border: 'none',
              padding: '0.6rem 1.5rem',
              borderRadius: '25px',
              cursor: 'pointer',
              fontFamily: 'inherit',
              fontSize: '1.05rem',
              backdropFilter: 'blur(10px)',
              transition: 'all 0.3s ease'
            }}>
              Get Started
            </button>
          </div>
        </nav>

        {/* Hero Content */}
        <div style={{
          maxWidth: '900px',
          textAlign: 'center',
          padding: '0 2rem',
          zIndex: 2,
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
          transition: 'all 1s ease-out 0.3s'
        }}>
          <h1 style={{
            fontSize: 'clamp(3rem, 8vw, 5.5rem)',
            color: '#FFF',
            marginBottom: '1.5rem',
            fontWeight: '400',
            lineHeight: '1.1',
            letterSpacing: '-0.03em'
          }}>
            Nourish Your Body,<br />
            <span style={{ 
              fontStyle: 'italic',
              background: 'linear-gradient(135deg, #A8C090 0%, #E8D5A5 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              Nurture the Planet
            </span>
          </h1>
          <p style={{
            fontSize: '1.35rem',
            color: 'rgba(255,255,255,0.95)',
            marginBottom: '3rem',
            lineHeight: '1.7',
            fontFamily: '"Quicksand", sans-serif',
            fontWeight: '400'
          }}>
            Organic meal kits delivered to your door. Pre-portioned ingredients,<br />
            chef-designed recipes, and zero waste packaging.
          </p>
          <button style={{
            background: '#FFF',
            color: '#4A6741',
            border: 'none',
            padding: '1.2rem 3rem',
            fontSize: '1.2rem',
            borderRadius: '35px',
            cursor: 'pointer',
            fontFamily: '"Quicksand", sans-serif',
            fontWeight: '600',
            boxShadow: '0 10px 30px rgba(0,0,0,0.15)',
            transition: 'all 0.3s ease',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.7rem'
          }}>
            Choose Your Plan
            <ArrowRight size={20} />
          </button>
        </div>

        {/* Scroll indicator */}
        <div style={{
          position: 'absolute',
          bottom: '3rem',
          left: '50%',
          transform: 'translateX(-50%)',
          animation: 'bounce 2s infinite',
          opacity: 0.7
        }}>
          <div style={{
            width: '2px',
            height: '40px',
            background: 'linear-gradient(to bottom, transparent, #FFF)',
            margin: '0 auto'
          }} />
        </div>
      </header>

      {/* Meal Plans Section */}
      <section id="plans" style={{
        padding: '8rem 4rem',
        maxWidth: '1400px',
        margin: '0 auto'
      }}>
        <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <h2 style={{
            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
            color: '#2F3E2C',
            marginBottom: '1rem',
            fontWeight: '400',
            letterSpacing: '-0.02em'
          }}>
            Find Your Perfect Plan
          </h2>
          <p style={{
            fontSize: '1.25rem',
            color: '#5A6A55',
            fontFamily: '"Quicksand", sans-serif',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            Every meal thoughtfully crafted to support the way you eat
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '2rem',
          marginBottom: '5rem'
        }}>
          {plans.map((plan, index) => (
            <div
              key={plan.id}
              onClick={() => setSelectedPlan(plan.id)}
              style={{
                background: selectedPlan === plan.id ? plan.color : '#FFF',
                color: selectedPlan === plan.id ? '#FFF' : '#2F3E2C',
                padding: '2.5rem 2rem',
                borderRadius: '20px',
                cursor: 'pointer',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                transform: selectedPlan === plan.id ? 'translateY(-8px) scale(1.02)' : 'translateY(0) scale(1)',
                boxShadow: selectedPlan === plan.id 
                  ? `0 20px 40px ${plan.color}40`
                  : '0 5px 20px rgba(0,0,0,0.08)',
                border: selectedPlan === plan.id ? 'none' : '2px solid #E8E3D6',
                animationDelay: `${index * 0.1}s`,
                opacity: isVisible ? 1 : 0,
                animation: isVisible ? 'fadeInUp 0.6s ease-out forwards' : 'none'
              }}
            >
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>
                {plan.icon}
              </div>
              <h3 style={{
                fontSize: '1.7rem',
                marginBottom: '0.8rem',
                fontWeight: '500'
              }}>
                {plan.name}
              </h3>
              <p style={{
                fontSize: '1.05rem',
                lineHeight: '1.6',
                fontFamily: '"Quicksand", sans-serif',
                opacity: selectedPlan === plan.id ? 0.95 : 0.75
              }}>
                {plan.description}
              </p>
            </div>
          ))}
        </div>

        {/* Customization */}
        <div style={{
          background: '#FFF',
          padding: '3rem',
          borderRadius: '25px',
          boxShadow: '0 10px 40px rgba(0,0,0,0.08)',
          maxWidth: '800px',
          margin: '0 auto'
        }}>
          <h3 style={{
            fontSize: '2rem',
            color: '#2F3E2C',
            marginBottom: '2.5rem',
            textAlign: 'center',
            fontWeight: '500'
          }}>
            Customize Your Box
          </h3>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <div>
              <label style={{
                display: 'block',
                fontSize: '1.1rem',
                color: '#5A6A55',
                marginBottom: '1rem',
                fontFamily: '"Quicksand", sans-serif',
                fontWeight: '600'
              }}>
                Number of Servings
              </label>
              <div style={{ display: 'flex', gap: '1rem' }}>
                {[2, 4].map(num => (
                  <button
                    key={num}
                    onClick={() => setServings(num)}
                    style={{
                      flex: 1,
                      padding: '1.2rem',
                      background: servings === num ? '#7C9C5E' : '#F7F4ED',
                      color: servings === num ? '#FFF' : '#2F3E2C',
                      border: 'none',
                      borderRadius: '15px',
                      fontSize: '1.1rem',
                      cursor: 'pointer',
                      fontFamily: '"Quicksand", sans-serif',
                      fontWeight: '600',
                      transition: 'all 0.3s ease',
                      boxShadow: servings === num ? '0 5px 20px rgba(124, 156, 94, 0.3)' : 'none'
                    }}
                  >
                    {num} People
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label style={{
                display: 'block',
                fontSize: '1.1rem',
                color: '#5A6A55',
                marginBottom: '1rem',
                fontFamily: '"Quicksand", sans-serif',
                fontWeight: '600'
              }}>
                Meals Per Week
              </label>
              <div style={{ display: 'flex', gap: '1rem' }}>
                {[3, 4, 5, 6].map(num => (
                  <button
                    key={num}
                    onClick={() => setMealsPerWeek(num)}
                    style={{
                      flex: 1,
                      padding: '1.2rem',
                      background: mealsPerWeek === num ? '#7C9C5E' : '#F7F4ED',
                      color: mealsPerWeek === num ? '#FFF' : '#2F3E2C',
                      border: 'none',
                      borderRadius: '15px',
                      fontSize: '1.1rem',
                      cursor: 'pointer',
                      fontFamily: '"Quicksand", sans-serif',
                      fontWeight: '600',
                      transition: 'all 0.3s ease',
                      boxShadow: mealsPerWeek === num ? '0 5px 20px rgba(124, 156, 94, 0.3)' : 'none'
                    }}
                  >
                    {num}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div style={{
            marginTop: '2.5rem',
            padding: '2rem',
            background: 'linear-gradient(135deg, #F7F4ED 0%, #E8E3D6 100%)',
            borderRadius: '15px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
            <div>
              <div style={{
                fontSize: '0.95rem',
                color: '#5A6A55',
                marginBottom: '0.3rem',
                fontFamily: '"Quicksand", sans-serif'
              }}>
                Estimated Weekly Total
              </div>
              <div style={{
                fontSize: '2.5rem',
                color: '#2F3E2C',
                fontWeight: '600'
              }}>
                ${calculatePrice()}
              </div>
              <div style={{
                fontSize: '0.9rem',
                color: '#7C9C5E',
                fontFamily: '"Quicksand", sans-serif'
              }}>
                ${(calculatePrice() / (servings * mealsPerWeek)).toFixed(2)} per serving
              </div>
            </div>
            <button style={{
              background: '#4A6741',
              color: '#FFF',
              border: 'none',
              padding: '1rem 2.5rem',
              fontSize: '1.1rem',
              borderRadius: '30px',
              cursor: 'pointer',
              fontFamily: '"Quicksand", sans-serif',
              fontWeight: '600',
              transition: 'all 0.3s ease',
              boxShadow: '0 5px 20px rgba(74, 103, 65, 0.3)'
            }}>
              Get Started
            </button>
          </div>
        </div>
      </section>

      {/* Sample Meals */}
      <section id="menu" style={{
        padding: '8rem 4rem',
        background: 'linear-gradient(to bottom, #FFF 0%, #F7F4ED 100%)'
      }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
            <h2 style={{
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              color: '#2F3E2C',
              marginBottom: '1rem',
              fontWeight: '400',
              letterSpacing: '-0.02em'
            }}>
              This Week's Menu
            </h2>
            <p style={{
              fontSize: '1.25rem',
              color: '#5A6A55',
              fontFamily: '"Quicksand", sans-serif'
            }}>
              Chef-designed recipes that make healthy eating effortless
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2.5rem'
          }}>
            {meals.map((meal, index) => (
              <div
                key={index}
                style={{
                  background: '#FFF',
                  borderRadius: '20px',
                  overflow: 'hidden',
                  boxShadow: '0 5px 25px rgba(0,0,0,0.08)',
                  transition: 'all 0.4s ease',
                  cursor: 'pointer',
                  animationDelay: `${index * 0.1}s`
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-10px)';
                  e.currentTarget.style.boxShadow = '0 15px 40px rgba(0,0,0,0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 5px 25px rgba(0,0,0,0.08)';
                }}
              >
                <div style={{
                  height: '200px',
                  background: `url(${meal.image}) center/cover`,
                  position: 'relative',
                  overflow: 'hidden'
                }}>
                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, rgba(0,0,0,0.3) 0%, transparent 50%)'
                  }} />
                </div>
                <div style={{ padding: '2rem' }}>
                  <h3 style={{
                    fontSize: '1.5rem',
                    color: '#2F3E2C',
                    marginBottom: '1rem',
                    fontWeight: '500'
                  }}>
                    {meal.name}
                  </h3>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1.5rem',
                    marginBottom: '1rem',
                    fontFamily: '"Quicksand", sans-serif',
                    fontSize: '0.95rem',
                    color: '#5A6A55'
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                      <Clock size={16} />
                      {meal.time}
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                      <Star size={16} fill="#E8A45C" color="#E8A45C" />
                      {meal.rating}
                    </div>
                  </div>
                  <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '0.5rem'
                  }}>
                    {meal.tags.map((tag, i) => (
                      <span
                        key={i}
                        style={{
                          padding: '0.4rem 0.9rem',
                          background: '#F7F4ED',
                          color: '#4A6741',
                          borderRadius: '20px',
                          fontSize: '0.85rem',
                          fontFamily: '"Quicksand", sans-serif',
                          fontWeight: '600'
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section style={{
        padding: '8rem 4rem',
        background: 'linear-gradient(135deg, #4A6741 0%, #5A7A51 100%)',
        color: '#FFF'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
            textAlign: 'center',
            marginBottom: '4rem',
            fontWeight: '400',
            letterSpacing: '-0.02em'
          }}>
            The Mission Kitchen Difference
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2rem'
          }}>
            {benefits.map((benefit, index) => (
              <div
                key={index}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '1rem',
                  animationDelay: `${index * 0.1}s`
                }}
              >
                <div style={{
                  background: 'rgba(255,255,255,0.2)',
                  borderRadius: '50%',
                  padding: '0.6rem',
                  flexShrink: 0
                }}>
                  <Check size={20} strokeWidth={3} />
                </div>
                <div style={{
                  fontSize: '1.2rem',
                  fontFamily: '"Quicksand", sans-serif',
                  fontWeight: '500',
                  lineHeight: '1.6'
                }}>
                  {benefit}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        background: '#2F3E2C',
        color: '#FFF',
        padding: '4rem 4rem 2rem',
      }}>
        <div style={{
          maxWidth: '1400px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '3rem',
          marginBottom: '3rem'
        }}>
          <div>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              fontSize: '1.8rem',
              fontWeight: '600',
              marginBottom: '1rem'
            }}>
              <Leaf size={28} />
              <span>The Mission Kitchen</span>
            </div>
            <p style={{
              fontSize: '1rem',
              opacity: 0.8,
              fontFamily: '"Quicksand", sans-serif',
              lineHeight: '1.7'
            }}>
              Organic meal kits for a healthier you and a healthier planet.
            </p>
          </div>
          <div>
            <h4 style={{
              fontSize: '1.2rem',
              marginBottom: '1rem',
              fontWeight: '600'
            }}>
              Company
            </h4>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '0.7rem',
              fontFamily: '"Quicksand", sans-serif',
              fontSize: '1rem',
              opacity: 0.8
            }}>
              <a href="#" style={{ color: '#FFF', textDecoration: 'none' }}>About Us</a>
              <a href="#" style={{ color: '#FFF', textDecoration: 'none' }}>Sustainability</a>
              <a href="#" style={{ color: '#FFF', textDecoration: 'none' }}>Careers</a>
              <a href="#" style={{ color: '#FFF', textDecoration: 'none' }}>Blog</a>
            </div>
          </div>
          <div>
            <h4 style={{
              fontSize: '1.2rem',
              marginBottom: '1rem',
              fontWeight: '600'
            }}>
              Support
            </h4>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '0.7rem',
              fontFamily: '"Quicksand", sans-serif',
              fontSize: '1rem',
              opacity: 0.8
            }}>
              <a href="#" style={{ color: '#FFF', textDecoration: 'none' }}>Help Center</a>
              <a href="#" style={{ color: '#FFF', textDecoration: 'none' }}>FAQs</a>
              <a href="#" style={{ color: '#FFF', textDecoration: 'none' }}>Contact Us</a>
              <a href="#" style={{ color: '#FFF', textDecoration: 'none' }}>Track Order</a>
            </div>
          </div>
          <div>
            <h4 style={{
              fontSize: '1.2rem',
              marginBottom: '1rem',
              fontWeight: '600'
            }}>
              Legal
            </h4>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '0.7rem',
              fontFamily: '"Quicksand", sans-serif',
              fontSize: '1rem',
              opacity: 0.8
            }}>
              <a href="#" style={{ color: '#FFF', textDecoration: 'none' }}>Privacy Policy</a>
              <a href="#" style={{ color: '#FFF', textDecoration: 'none' }}>Terms of Service</a>
              <a href="#" style={{ color: '#FFF', textDecoration: 'none' }}>Cookie Policy</a>
            </div>
          </div>
        </div>
        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.2)',
          paddingTop: '2rem',
          textAlign: 'center',
          fontFamily: '"Quicksand", sans-serif',
          fontSize: '0.95rem',
          opacity: 0.7
        }}>
          <p>© 2024 The Mission Kitchen Meal Delivery. All rights reserved.</p>
        </div>
      </footer>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600&family=Quicksand:wght@400;500;600;700&display=swap');
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes bounce {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50% { transform: translateX(-50%) translateY(-10px); }
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        a:hover {
          opacity: 1 !important;
        }
        
        button:hover {
          transform: translateY(-2px);
          filter: brightness(1.05);
        }
      `}</style>
    </div>
  );
}
