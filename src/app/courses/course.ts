export interface Course {
    id: number;
    title: string;
    description: string;
    imageUrl: string;
    category: string;
    duration: number;
    level: 'Beginner' | 'Intermediate' | 'Advanced';
    instructor: string;
    students: number;
    rating: number;
    learningOutcomes: string[];
    modules: {
        id: number;
        title: string;
        lessons: string[];
    }[];
}