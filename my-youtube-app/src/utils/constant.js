const GOOGLE_YOUTUBE_API_KEY = "AIzaSyAajTPuD77meGLbgYyy7TNFDJxJAsRdpUM";
export const YOUTUBE_API = 'https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=30&regionCode=IN&key=' +GOOGLE_YOUTUBE_API_KEY;
export const HAMBYRGER_ICON_API = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOS9EEOhmjbrqupspcZiT1URXVGR7EGcs6AQ&s";
export const YOUTUBE_LOGO_API = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSI4Wk4Pc-o8UNZjvoVH0UpMr_eRFGMwX8LJA&s";
export const USER_LOGO_API = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOApFCSVByzhZorHUAP-J851JAYyOPtI1jdg&s";
export const dayCount = (publishedAt) => {
    // Create a Date object from the publishedAt string
    const publishedDate = new Date(publishedAt);

    // Check if the date is valid
    if (isNaN(publishedDate.getTime())) {
        throw new Error("Invalid date format");
    }

    // Get the current date
    const currentDate = new Date();

    // Calculate the difference in milliseconds
    const differenceInMilliseconds = currentDate - publishedDate;

    // Convert the difference from milliseconds to days
    const differenceInDays = Math.floor(differenceInMilliseconds / (1000 * 60 * 60 * 24));
    
    return differenceInDays;
};
