'use strict';

function useOpenModal(): void {
    document.startViewTransition(() => {
        const source = document.querySelector<HTMLInputElement>('#input-image')!.value;
        document.querySelector<HTMLElement>('.navbar')!.style.opacity = '.05';
        document.querySelector<HTMLElement>('#home')!.style.opacity = '.05';
        document.querySelector<HTMLElement>('.footer')!.style.opacity = '.05';
        document.querySelector<HTMLElement>('.modal')!.style.display = 'block';
        document.querySelector<HTMLImageElement>('.modal img')!.src = source;
    });
}

export default useOpenModal;
