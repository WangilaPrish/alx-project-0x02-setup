export interface CardProps {
    title: string;
    content: string;
}

export interface PostModalProps {
    isOpen: boolean;
    onClose: () => void;
    onAddPost: (title: string, content: string) => void;
}

export interface ButtonProps {
    title: string;
    size?: 'small' | 'medium' | 'large';
    shape?: 'rounded-sm' | 'rounded-md' | 'rounded-full';
  }
export interface PostProps {
    title: string;
    content: string;
    userId: number;
}

export interface UserProps {
    name: string;
    email: string;
    address: string;
  }
