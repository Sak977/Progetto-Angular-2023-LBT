import { Component } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css'],
})
export class FaqComponent {
  faq(event: Event) {
    const target = <HTMLElement>event.target;
    const clicked = target.closest('.accordion-flex');
    console.log(clicked);
    if (!clicked) {
      return;
    }

    document
      .querySelectorAll('.accordion-flex')
      .forEach((li) => li.classList.remove('margin'));
    clicked.classList.add('margin');
    clicked.nextElementSibling?.classList.toggle('hidden');
    clicked.querySelector('.span-icon')?.classList.toggle('hidden');
    clicked.querySelector('.span-icon-visible')?.classList.toggle('hidden');
  }
}
