document.addEventListener('DOMContentLoaded', () => {
    const shadowHost = document.createElement('header');
    document.body.appendChild(shadowHost);
    const shadowRoot = shadowHost.attachShadow({
        mode: 'open',
    });

    shadowRoot.innerHTML = '<div>This is a sample div from the shadowRoot<div>';
    console.log('sample');
});
