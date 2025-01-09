export const ageCalculation = (dobString: string): number => {
    const dob = new Date(dobString);
    const today = new Date();

    let age = today.getFullYear() - dob.getFullYear();
    const monthDifferent = today.getMonth() - dob.getMonth();
    const dayDifferent = today.getDate() - dob.getDate();

    // Adjust age if the current date is before the birth date this year
    if(monthDifferent < 0 || (monthDifferent === 0 && dayDifferent < 0))
        age--;

    return age;
}