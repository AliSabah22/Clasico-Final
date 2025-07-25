import { useState } from 'react';

interface BookingData {
  service: string;
  date: string;
  time: string;
  barber: string;
  name: string;
  email: string;
  phone: string;
}

interface BookingResponse {
  success: boolean;
  message: string;
  bookingId?: string;
}

export function useBooking() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const bookAppointment = async (data: BookingData): Promise<BookingResponse> => {
    setIsLoading(true);
    setError(null);

    try {
      // Here you would typically make an API call to your booking system
      // For now, we'll simulate a successful booking
      await new Promise(resolve => setTimeout(resolve, 1000));

      return {
        success: true,
        message: 'Booking confirmed!',
        bookingId: 'BK' + Math.random().toString(36).substr(2, 9),
      };
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
      return {
        success: false,
        message: 'Failed to book appointment',
      };
    } finally {
      setIsLoading(false);
    }
  };

  return {
    bookAppointment,
    isLoading,
    error,
  };
}

// Usage example (in your booking form component):
// import LoadingOverlay from '@/components/ui/LoadingOverlay';
// const { isLoading } = useBooking();
// <LoadingOverlay isLoading={isLoading} message="Booking your appointment..." /> 