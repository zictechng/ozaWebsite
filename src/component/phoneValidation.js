// check if phone number is valid 
 
export default function IsValidPhoneNumber(data) {
    // Regular expression pattern for validating phone number
    const phonePattern = /^\d{10}$/;
    return phonePattern.test(data);
};