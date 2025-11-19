import { Star, Quote } from "lucide-react";
import { testimonials } from "@/data/testimonials";

export default function Testimonials() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Ils Ont Transformé Leur Carrière
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez les témoignages authentiques de professionnels qui ont réalisé leur bilan de compétences avec NETZ Informatique et ont trouvé leur nouvelle voie.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {testimonials.slice(0, 6).map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
            >
              {/* Quote Icon */}
              <div className="mb-6">
                <Quote className="w-10 h-10 text-primary/20" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              {/* Highlight */}
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                {testimonial.highlight}
              </h3>

              {/* Content */}
              <p className="text-gray-600 mb-6 line-clamp-6">
                {testimonial.content}
              </p>

              {/* Author Info */}
              <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full bg-gray-100"
                  loading="lazy"
                  width="48"
                  height="48"
                />
                <div>
                  <div className="font-semibold text-gray-900">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-500">
                    {testimonial.role} • {testimonial.location}
                  </div>
                  <div className="text-xs text-gray-400 mt-1">
                    {testimonial.date}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Testimonials - Compact View */}
        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.slice(6).map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-xl p-6 shadow-medium hover:shadow-lg transition-shadow border border-gray-100"
            >
              <div className="flex gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full bg-gray-100 flex-shrink-0"
                  loading="lazy"
                  width="64"
                  height="64"
                />
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <div className="font-semibold text-gray-900">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-gray-500">
                        {testimonial.role} • {testimonial.location}
                      </div>
                    </div>
                    <div className="flex gap-0.5">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>
                  </div>
                  <p className="text-sm font-medium text-primary mb-2">
                    {testimonial.highlight}
                  </p>
                  <p className="text-sm text-gray-600 line-clamp-3">
                    {testimonial.content}
                  </p>
                  <div className="text-xs text-gray-400 mt-2">
                    {testimonial.date}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-8 bg-white rounded-2xl px-12 py-6 shadow-lg">
            <div>
              <div className="text-4xl font-bold text-primary">95%</div>
              <div className="text-sm text-gray-600 mt-1">Taux de Satisfaction</div>
            </div>
            <div className="w-px h-12 bg-gray-200"></div>
            <div>
              <div className="text-4xl font-bold text-primary">670+</div>
              <div className="text-sm text-gray-600 mt-1">Bilans Réalisés</div>
            </div>
            <div className="w-px h-12 bg-gray-200"></div>
            <div>
              <div className="text-4xl font-bold text-primary">4.9/5</div>
              <div className="text-sm text-gray-600 mt-1">Note Moyenne</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
