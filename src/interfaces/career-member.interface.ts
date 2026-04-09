export interface CareerStep {
    company: string;
    title: string;
    period: string;
    location?: string;
    highlights: string[];
}

export interface CareerMember {
    fullName: string;
    role: string;
    imageSrc: string;
    summary: string;
    steps: CareerStep[];
}
