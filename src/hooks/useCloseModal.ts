'use strict';

function useCloseModal(): void {
    document.startViewTransition(() => {
        document.querySelector<HTMLElement>('.navbar')!.style.opacity = '1';
        document.querySelector<HTMLElement>('#home')!.style.opacity = '1';
        document.querySelector<HTMLElement>('.footer')!.style.opacity = '1';
        document.querySelector<HTMLElement>('.modal')!.style.display = 'none';
    });
}

export default useCloseModal;
