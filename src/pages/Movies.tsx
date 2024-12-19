import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import Navbar from "@/components/Navbar";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useState } from "react";

// Mock data - in a real app, this would come from an API
const allMovies = Array.from({ length: 100 }, (_, i) => ({
  id: i + 1,
  title: `Movie ${i + 1}`,
  rating: (Math.random() * 2 + 3).toFixed(1),
  imageUrl: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
  year: 2020 + Math.floor(Math.random() * 4),
  genre: "Action",
}));

const ITEMS_PER_PAGE = 20;

const Movies = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(allMovies.length / ITEMS_PER_PAGE);

  // Calculate the movies to display for the current page
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentMovies = allMovies.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Generate page numbers to display
  const getPageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 5;
    
    if (totalPages <= maxVisiblePages) {
      // Show all pages if total pages is less than max visible
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // Always show first page
      pages.push(1);
      
      if (currentPage > 3) {
        pages.push('...');
      }
      
      // Show pages around current page
      for (let i = Math.max(2, currentPage - 1); i <= Math.min(currentPage + 1, totalPages - 1); i++) {
        pages.push(i);
      }
      
      if (currentPage < totalPages - 2) {
        pages.push('...');
      }
      
      // Always show last page
      pages.push(totalPages);
    }
    
    return pages;
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 pt-24 pb-12">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-cinema-text">Movies</h1>
          <div className="flex items-center gap-4">
            <select className="bg-cinema-primary text-cinema-text border border-cinema-accent rounded-lg px-4 py-2">
              <option value="latest">Latest</option>
              <option value="popular">Popular</option>
              <option value="rating">Top Rated</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 mb-8">
          {currentMovies.map((movie) => (
            <Card 
              key={movie.id}
              className="group bg-cinema-primary border-cinema-primary hover:border-cinema-accent transition-all duration-300 cursor-pointer overflow-hidden"
            >
              <CardContent className="p-0">
                <div className="relative aspect-[2/3]">
                  <img
                    src={movie.imageUrl}
                    alt={movie.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 p-4">
                      <div className="flex items-center space-x-2 mb-2">
                        <Star className="w-4 h-4 text-cinema-accent fill-current" />
                        <span className="text-sm font-bold text-white">{movie.rating}</span>
                      </div>
                      <div className="space-y-1">
                        <p className="text-sm text-white/80">{movie.year}</p>
                        <p className="text-sm text-white/80">{movie.genre}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-medium text-cinema-text group-hover:text-cinema-accent transition-colors duration-300">
                    {movie.title}
                  </h3>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  if (currentPage > 1) handlePageChange(currentPage - 1);
                }}
                className={currentPage === 1 ? 'pointer-events-none opacity-50' : ''}
              />
            </PaginationItem>
            
            {getPageNumbers().map((page, index) => (
              <PaginationItem key={index}>
                {typeof page === 'number' ? (
                  <PaginationLink
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      handlePageChange(page);
                    }}
                    isActive={currentPage === page}
                  >
                    {page}
                  </PaginationLink>
                ) : (
                  <span className="px-4 py-2">...</span>
                )}
              </PaginationItem>
            ))}
            
            <PaginationItem>
              <PaginationNext
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  if (currentPage < totalPages) handlePageChange(currentPage + 1);
                }}
                className={currentPage === totalPages ? 'pointer-events-none opacity-50' : ''}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </main>
    </div>
  );
};

export default Movies;