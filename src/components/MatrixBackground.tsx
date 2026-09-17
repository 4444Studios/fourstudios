import { useEffect, useRef } from 'react';

const MatrixBackground = ({ opacity = 0.15 }) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let width = window.innerWidth;
        let height = window.innerHeight;

        canvas.width = width;
        canvas.height = height;

        const fontSize = 16;
        const columns = Math.ceil(width / fontSize);
        const drops: number[] = new Array(columns).fill(1);

        const chars = "4";

        const draw = () => {
            ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
            ctx.globalCompositeOperation = 'destination-out';
            ctx.fillRect(0, 0, width, height);

            ctx.globalCompositeOperation = 'source-over';
            ctx.font = `${fontSize}px monospace`;

            for (let i = 0; i < drops.length; i++) {
                const text = chars;
                const x = i * fontSize;
                const y = drops[i] * fontSize;

                // Dimmer trail just behind the head
                if (drops[i] > 1) {
                    ctx.fillStyle = '#8a0303';
                    ctx.globalAlpha = 0.35;
                    ctx.fillText(text, x, y - fontSize);
                }

                // Brighter head
                ctx.fillStyle = Math.random() > 0.9 ? '#fff5f5' : '#ff4d4d';
                ctx.globalAlpha = Math.random() > 0.95 ? 1 : 0.85;
                ctx.fillText(text, x, y);
                ctx.globalAlpha = 1;

                if (y > height && Math.random() > 0.975) {
                    drops[i] = 0;
                }

                drops[i]++;
            }
        };

        let animationFrameId: number;
        const interval = 50;
        let lastTime = 0;

        const animate = (time: number) => {
            if (time - lastTime > interval) {
                draw();
                lastTime = time;
            }
            animationFrameId = requestAnimationFrame(animate);
        };

        animationFrameId = requestAnimationFrame(animate);

        const handleResize = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
            const newColumns = Math.ceil(width / fontSize);
            if (newColumns > drops.length) {
                const added = new Array(newColumns - drops.length).fill(0);
                drops.push(...added);
            }
        };

        window.addEventListener('resize', handleResize);

        return () => {
            cancelAnimationFrame(animationFrameId);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 z-0 pointer-events-none"
            style={{ opacity }}
        />
    );
};

export default MatrixBackground;
