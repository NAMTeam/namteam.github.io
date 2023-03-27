const localPreferredFont = localStorage.getItem('preferred-font');

if (localPreferredFont !== null) {
    document.documentElement.setAttribute('data-preferred-font', localPreferredFont);
} else {
    document.documentElement.setAttribute('data-preferred-font', 'default');
    localStorage.setItem('preferred-font', 'default')
}
