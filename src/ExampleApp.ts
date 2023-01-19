/* Lecture 2
 * CSCI 4611, Spring 2023, University of Minnesota
 * Instructor: Evan Suma Rosenberg <suma@umn.edu>
 * License: Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International
 */ 

import * as gfx from 'gophergfx'

export class ExampleApp extends gfx.GfxApp
{
    private exampleRectangle: gfx.Rectangle;

    constructor()
    {
        super();

        this.exampleRectangle = new gfx.Rectangle();
    }

    createScene(): void 
    {
        console.log('Hello world!');

        this.exampleRectangle.scale.set(1.5, 0.25);
        
        this.scene.add(this.exampleRectangle);
    }

    update(deltaTime: number): void 
    {
        //this.exampleRectangle.position.y += 0.005;
        this.exampleRectangle.rotation += 0.001;
    }

    onMouseDown(event: MouseEvent): void 
    {
        console.log('Mouse down ' + event.x + ' ' + event.y);
    }
}