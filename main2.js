let rs = require('readline-sync');

// Function to get username:
const GET_USERNAME = () => {
    let userName = rs.question('Hello, welcome to the Zodiac sign revealer. May I have your name? ');

    // Ready to find out your sign?
    const READY = () => {
        if (rs.keyInYN(` Hey ${userName}, ready to find out your Zodiac sign?`)) {
            // 'Y' key was pressed.
            console.log('Let\'s do it! When is your birthday?');
        } else {
            // Another key was pressed.
            console.log('Why are you here then?');
            GET_USERNAME();
        }
    }
    READY();

    // Select date range:
    const SELECT_DATE = () => {
        let rs = require('readline-sync'),
            dates = ['January 20-February 18', 'February 19-March 20', 'March 21-April 19', 'April 20-May 20', 'May 21-June 20', 'June 21-July 22', 'July 23-August 22', 'August 23-September 22', 'September 23-October 22', 'October 23-November 21', 'November 22-December 21', 'December 22-January 19'],
            index = rs.keyInSelect(dates, 'Please select a date range.');
        
        switch(dates[index]) {
            case 'January 20-February 18':
                console.log('Your Zodiac sign is Aquarius.');
                break;
            case 'February 19-March 20':
                console.log('Your Zodiac sign is Pisces.');
                break;
            case 'March 21-April 19':
                console.log('Your Zodiac sign is Aries.');
                break;
            case 'April 20-May 20':
                console.log('Your Zodiac sign is Taurus.');
                break;
            case 'May 21-June 20':
                console.log('Your Zodiac sign is Gemini.');
                break;
            case 'June 21-July 22':
                console.log('Your Zodiac sign is Cancer.');
                break;
            case 'July 23-August 22':
                console.log('Your Zodiac sign is Leo.');
                break;
            case 'August 23-September 22':
                console.log('Your Zodiac sign is Virgo.');
                break;
            case 'September 23-October 22':
                console.log('Your Zodiac sign is Libra.');
                break;
            case 'October 23-November 21':
                console.log('Your Zodiac sign is Scorpio.');
                break;
            case 'November 22-December 21':
                console.log('Your Zodiac sign is Sagittarius.');
                break;
            case 'December 22-January 19':
                console.log('Your Zodiac sign is Capricorn.');
                break;
            default:
                GET_USERNAME();
        }
    }
    SELECT_DATE();
}
GET_USERNAME();