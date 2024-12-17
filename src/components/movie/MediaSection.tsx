interface MediaSectionProps {
  title: string;
  trailerUrl: string;
  freeMovieUrl?: string;
  isAvailableForFree: boolean;
}

const MediaSection = ({ title, trailerUrl, freeMovieUrl, isAvailableForFree }: MediaSectionProps) => {
  return (
    <section>
      <h2 className="text-2xl font-bold text-white mb-6">Media</h2>
      
      {/* Trailer */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold text-white mb-4">Trailer</h3>
        <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
          <iframe
            src={trailerUrl}
            className="absolute top-0 left-0 w-full h-full rounded-lg"
            allowFullScreen
            title={`${title} Trailer`}
          ></iframe>
        </div>
      </div>

      {/* Free Movie - Only show if available */}
      {isAvailableForFree && freeMovieUrl && (
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Watch Movie</h3>
          <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
            <iframe
              src={freeMovieUrl}
              className="absolute top-0 left-0 w-full h-full rounded-lg"
              allowFullScreen
              title={`${title} Full Movie`}
            ></iframe>
          </div>
        </div>
      )}
    </section>
  );
};

export default MediaSection;