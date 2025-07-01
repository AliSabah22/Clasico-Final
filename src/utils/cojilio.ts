// Cojilio Booking Integration
export const COJILIO_BOOKING_URL = 'https://booking.cojilio.com/clasicobarbershop';

// Contact information from Cojilio
export const CONTACT_INFO = {
  address: "3480 PLATINUM DR MISSISSAUGA, ON L5M 2S4",
  phone: "(905) 607-4400",
  email: "hello@clasicobarber.com",
  hours: {
    sunday: "10:00 AM - 10:00 PM",
    monday: "10:00 AM - 10:00 PM",
    tuesday: "10:00 AM - 10:00 PM",
    wednesday: "10:00 AM - 10:00 PM",
    thursday: "10:00 AM - 10:00 PM",
    friday: "10:00 AM - 10:00 PM",
    saturday: "10:00 AM - 10:00 PM"
  }
};

/**
 * Opens Cojilio booking in a new tab
 */
export const openCojilioBooking = () => {
  try {
    window.open(COJILIO_BOOKING_URL, '_blank', 'noopener,noreferrer');
  } catch (error) {
    console.error('Failed to open Cojilio booking:', error);
    // Fallback: try to open in same tab
    window.location.href = COJILIO_BOOKING_URL;
  }
};

/**
 * Opens phone dialer with the barbershop number
 */
export const callBarbershop = () => {
  try {
    window.open(`tel:${CONTACT_INFO.phone.replace(/\D/g, '')}`, '_self');
  } catch (error) {
    console.error('Failed to open phone dialer:', error);
  }
};

/**
 * Opens email client with the barbershop email
 */
export const emailBarbershop = () => {
  try {
    window.open(`mailto:${CONTACT_INFO.email}`, '_self');
  } catch (error) {
    console.error('Failed to open email client:', error);
  }
};

/**
 * Opens Google Maps with the barbershop location
 */
export const getDirections = () => {
  try {
    const address = encodeURIComponent(CONTACT_INFO.address);
    window.open(`https://maps.google.com/?q=${address}`, '_blank', 'noopener,noreferrer');
  } catch (error) {
    console.error('Failed to open Google Maps:', error);
  }
};

/**
 * Gets formatted hours for display
 */
export const getFormattedHours = () => {
  return Object.entries(CONTACT_INFO.hours).map(([day, hours]) => ({
    day: day.charAt(0).toUpperCase() + day.slice(1),
    hours
  }));
};

/**
 * Checks if the barbershop is currently open
 * Note: This is a simplified check based on current time vs opening hours
 */
export const isCurrentlyOpen = (): boolean => {
  const now = new Date();
  const currentHour = now.getHours();
  const currentDay = now.getDay(); // 0 = Sunday, 6 = Saturday
  
  // Barbershop is open 10 AM - 10 PM every day
  return currentHour >= 10 && currentHour < 22;
};

/**
 * Gets the next opening time
 */
export const getNextOpeningTime = (): string => {
  const now = new Date();
  const currentHour = now.getHours();
  
  if (currentHour < 10) {
    return "10:00 AM";
  } else if (currentHour >= 22) {
    return "Tomorrow at 10:00 AM";
  } else {
    return "Open now until 10:00 PM";
  }
}; 