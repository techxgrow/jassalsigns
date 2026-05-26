import React from "react";
import { Award, TrendingUp, Users, ShieldCheck } from "lucide-react";

const FranchiseBenefits = () => {
  const benefits = [
    {
      icon: <Award className="w-8 h-8 text-[#ED1D26]" />,
      title: "30+ Years Legacy",
      description:
        "Join a brand with decades of proven excellence and market authority.",
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-[#ED1D26]" />,
      title: "Proven Business Model",
      description:
        "Access a turnkey system designed for high profitability and scalability.",
    },
    {
      icon: <Users className="w-8 h-8 text-[#ED1D26]" />,
      title: "Expert Training",
      description:
        "Comprehensive support and training to ensure your success from day one.",
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-[#ED1D26]" />,
      title: "Exclusive Territory",
      description:
        "Secure your market with protected territories and dedicated growth plans.",
    },
  ];

  return (
    <section id="benefits" className="py-24 bg-white">
      <div className="max-w-[85vw] mx-auto">
        <div className="text-center mb-16" data-aos="fade-up">
          <h4 className="text-[#ED1D26] font-bold uppercase tracking-widest mb-2">
            The Jassal Advantage
          </h4>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Why Partner With{" "}
            <span className="text-[#ED1D26]">Jassal Signs?</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white p-10 rounded-3xl shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 group hover:-translate-y-2"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="mb-6 p-4 bg-red-50 rounded-2xl inline-block group-hover:bg-[#ED1D26] transition-colors duration-500">
                {React.cloneElement(benefit.icon, {
                  className:
                    "w-8 h-8 text-[#ED1D26] group-hover:text-white transition-colors duration-500",
                })}
              </div>
              <h3 className="text-2xl font-bold mb-4">{benefit.title}</h3>
              <p className="text-gray-600 leading-relaxed font-semibold">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FranchiseBenefits;
