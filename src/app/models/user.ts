export class User {
    [x: string]: any;
    id: number = 0;
    username: string = '';
    email: string = '';
    password?: string;
    firstName: string = '';
    lastName: string = '';
    createdAt: Date = new Date();
    lastLogin: Date = new Date();
    admin: boolean = false;
    
    /*totalScore: number;
    level: number;
    gamesWon: number;
    gamesPlayed: number;
    accuracy: number;
    currentStreak: number;*/


    constructor(){ }
}

