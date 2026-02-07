import React, { useState, useRef } from 'react';
import { Play, Star, Quote, Volume2, VolumeX } from 'lucide-react';

/* -------------------------------------------------------------------------- */
/*                           Video Testimonial Card                           */
/* -------------------------------------------------------------------------- */

interface VideoTestimonialProps {
    url: string;
    name: string;
    role: string;
    thumbnail: string;
    index: number;
}

const VideoTestimonialCard: React.FC<VideoTestimonialProps> = ({ url, name, role, thumbnail, index }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [isMuted, setIsMuted] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);

    const handlePlay = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
                setIsPlaying(false);
            } else {
                videoRef.current.play().catch(e => console.error("Error playing video:", e));
                setIsPlaying(true);
            }
        }
    };

    const toggleMute = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (videoRef.current) {
            videoRef.current.muted = !isMuted;
            setIsMuted(!isMuted);
        }
    };

    return (
        <div
            className="relative group rounded-2xl overflow-hidden bg-neutral-900 border border-white/5 aspect-square shadow-xl transition-all duration-500 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] hover:border-accent/40 hover:-translate-y-1 cursor-pointer"
            onClick={handlePlay}
        >
            <video
                ref={videoRef}
                src={url}
                poster={thumbnail}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                playsInline
                loop
                preload="none"
                onClick={handlePlay}
                onEnded={() => setIsPlaying(false)}
            />

            {/* Overlay - Only visible when not playing or on hover */}
            <div className={`absolute inset-0 bg-black/40 backdrop-blur-[2px] transition-opacity duration-300 flex flex-col items-center justify-center gap-4 ${isPlaying ? 'opacity-0 hover:opacity-100' : 'opacity-100'}`}>

                {/* Play Button */}
                <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:bg-accent group-hover:border-accent">
                    <Play className={`w-6 h-6 text-white ml-1 ${isPlaying ? 'fill-white' : 'fill-white'}`} />
                </div>

                {/* Info */}
                <div className="text-center absolute bottom-6 w-full px-4">
                    <h3 className="text-white font-bold text-lg tracking-tight mb-1 drop-shadow-md">
                        {name}
                    </h3>
                    <div className="inline-block px-3 py-1 rounded-full bg-black/60 border border-white/10 text-xs font-medium text-gray-300 backdrop-blur-sm">
                        {role}
                    </div>
                </div>
            </div>

            {/* Mute Toggle (Top Right) */}
            {isPlaying && (
                <button
                    onClick={toggleMute}
                    className="absolute top-4 right-4 p-2 rounded-full bg-black/50 border border-white/10 text-white hover:bg-black/70 transition-colors z-20"
                >
                    {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                </button>
            )}
        </div>
    );
};

/* -------------------------------------------------------------------------- */
/*                                Main Component                              */
/* -------------------------------------------------------------------------- */

const WallOfTruth: React.FC = () => {
    const videoTestimonials = [
        { url: "/assets/testimonials/videos/square/ariel_levit.mp4", name: "Ariel Levit", role: "Agency Owner", thumbnail: "/assets/testimonials/thumbnails/ariel_levit.jpg" },
        { url: "/assets/testimonials/videos/square/eric_wood.mp4", name: "Eric Wood", role: "Founder", thumbnail: "/assets/testimonials/thumbnails/eric_wood.jpg" },
        { url: "/assets/testimonials/videos/square/jake_morrison.mp4", name: "Jake Morrison", role: "Entrepreneur", thumbnail: "/assets/testimonials/thumbnails/jake_morrison.jpg" },
        { url: "/assets/testimonials/videos/square/jean_marc.mp4", name: "Jean-Marc", role: "Business Owner", thumbnail: "/assets/testimonials/thumbnails/jean_marc.jpg" },
        { url: "/assets/testimonials/videos/square/liam_carter.mp4", name: "Liam Carter", role: "Consultant", thumbnail: "/assets/testimonials/thumbnails/liam_carter.jpg" },
        { url: "/assets/testimonials/videos/square/quincy_thomas.mp4", name: "Quincy Thomas", role: "Agency Owner", thumbnail: "/assets/testimonials/thumbnails/quincy_thomas.jpg" },
        { url: "/assets/testimonials/videos/square/roy_velasquez.mp4", name: "Roy Velasquez", role: "CEO", thumbnail: "/assets/testimonials/thumbnails/roy_velasquez.jpg" },
        { url: "/assets/testimonials/videos/square/ryan_caldwell.mp4", name: "Ryan Caldwell", role: "Growth Expert", thumbnail: "/assets/testimonials/thumbnails/ryan_caldwell.jpg" },
        { url: "/assets/testimonials/videos/square/sadek_aber.mp4", name: "Sadek Aber", role: "Founder", thumbnail: "/assets/testimonials/thumbnails/sadek_aber.jpg" },
        { url: "/assets/testimonials/videos/square/syed_khalid.mp4", name: "Syed Khalid", role: "Agency Owner", thumbnail: "/assets/testimonials/thumbnails/syed_khalid.jpg" }
    ];

    const imageTestimonials = [
        "Ariel Levit.png",
        "Eric Wood.png",
        "Jake Morrison.png",
        "Jean-Marc.png",
        "Liam Carter.png",
        "Quincy Thomas.png",
        "Roy Velasquez.png",
        "Ryan Caldwell.png",
        "Sadek Aber.png",
        "Siseko Dodo.png",
        "Syed Khalid Hussain.png"
    ];

    return (
        <section className="relative py-32 bg-black overflow-hidden" id="testimonials">
            {/* Background Effects */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
            <div className="absolute inset-0 bg-[url('/assets/grid-pattern.svg')] opacity-10 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Section Header — tightened mb-20 → mb-12 */}
                <div className="text-center mb-12 max-w-3xl mx-auto reveal">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-bold uppercase tracking-wider mb-6">
                        <Star className="w-4 h-4" />
                        <span>Wall of Truth</span>
                    </div>
                    <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tighter">
                        Real Results. <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-blue-600">
                            Zero Fluff.
                        </span>
                    </h2>
                </div>

                {/* Video Testimonials Grid (Square) */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-32 reveal">
                    {videoTestimonials.map((testimonial, i) => (
                        <VideoTestimonialCard
                            key={i}
                            url={testimonial.url}
                            index={i}
                            name={testimonial.name}
                            role={testimonial.role}
                            thumbnail={testimonial.thumbnail}
                        />
                    ))}
                </div>

                {/* Image Testimonials Masonry Grid */}
                <div className="mb-24">
                    <div className="text-center mb-12 reveal">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/60 text-xs font-bold uppercase tracking-wider mb-4">
                            <Quote className="w-4 h-4" />
                            <span>More Success Stories</span>
                        </div>
                    </div>

                    <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
                        {imageTestimonials.map((filename, i) => (
                            <div key={i} className={`break-inside-avoid group relative reveal reveal-delay-${Math.min(i % 3 + 1, 3)}`}>
                                <div className="bg-neutral-900 rounded-xl border border-white/5 overflow-hidden transition-all duration-300 hover:border-accent/40 hover:shadow-[0_0_30px_rgba(0,123,255,0.1)]">
                                    <div className="absolute inset-0 bg-gradient-to-tr from-accent/0 via-accent/0 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                    <img
                                        src={`/assets/testimonials/${filename}`}
                                        alt={`Testimonial from ${filename.replace('.png', '').replace(/_/g, ' ')}`}
                                        className="w-full h-auto object-contain"
                                        loading="lazy"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WallOfTruth;
