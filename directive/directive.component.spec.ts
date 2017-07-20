import { TestBed, inject } from '@angular/core/testing';

import { DirectiveComponent } from './directive.component';

describe('a directive component', () => {
	let component: DirectiveComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				DirectiveComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([DirectiveComponent], (DirectiveComponent) => {
		component = DirectiveComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});