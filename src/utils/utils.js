export const formatDateTime = (dateTime) => {
    const options = { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric', 
      hour: '2-digit', 
      minute: '2-digit' 
    };
  
    const date = new Date(dateTime);
    return date.toLocaleDateString('en-GB', options);
  };
  