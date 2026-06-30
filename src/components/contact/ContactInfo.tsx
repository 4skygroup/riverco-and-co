import { Compass, TrendingUp } from 'lucide-react';

export default function InfoSection() {
    return (
        <div className="flex flex-col gap-8 text-white max-w-xl">
            <h2 className="text-4xl md:text-5xl font-bold">
                Contactez <span className="text-[#FF0000]">notre équipe</span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed">
                Laissez-nous votre prospection commerciale et l'intégration de votre CRM pour transformer chaque interaction en résultats concrets. Automatisez vos process, accélérez votre croissance. Parlons-en.
            </p>

            <div className="flex gap-6 mt-4">
                <div className="flex items-start gap-4">
                    <Compass className="w-8 h-8 text-white shrink-0" />
                    <div>
                        <h3 className="font-bold text-xl">Réactivité immédiate.</h3>
                        <p className="text-gray-500 text-sm">
                            Nous déployons votre force commerciale en moins de 4 semaines pour des résultats mesurables dès le premier mois.
                        </p>
                    </div>
                </div>
                <div className="flex items-start gap-4">
                    <TrendingUp className="w-8 h-8 text-white shrink-0" />
                    <div>
                        <h3 className="font-bold text-xl">Un process agile</h3>
                        <p className="text-gray-500 text-sm">
                            Une méthodologie ajustable en temps réel pour optimiser vos campagnes et maximiser votre ROI selon les feedbacks terrain.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}