import { error, info } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';

export function onNoCountry() {
  info({
    title: 'Ошибка!',
    text: 'Введите корректный запрос ...(Ukraine)',
    delay: 2000,
    closerHover: true,
    mouseReset: true,
    shadow: true,
  });
}

export function onOutputInfo() {
  error({
    title: 'Большое количество совпадений',
    text: 'Пожалуйта, введите более конкретный запрос ...(USA)',
    delay: 2000,
    closerHover: true,
    mouseReset: true,
    shadow: true,
  });
}
export function onError() {
  alert('Данные для поиска страны отстутсвуют');
}