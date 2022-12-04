import { math } from "mathlifier";

function randomEnum<T>(anEnum: T): T[keyof T] {
	const enumValues = Object.keys(anEnum)
		.map((n) => Number.parseInt(n))
		.filter((n) => !Number.isNaN(n)) as unknown as T[keyof T][];
	const randomIndex = Math.floor(Math.random() * enumValues.length);
	const randomEnumValue = enumValues[randomIndex];
	return randomEnumValue;
}

enum Size {
	small,
	medium,
	large
}

enum Color {
	blue,
	pink
}


export class StarSprite {
	size: number;
	color: Color;
	x: number;
	y: number;
	scale: number;
	sprite_frame_index: number;
	frame_change_probability: number;
	sprite_imgs: HTMLElement[];
	complete: boolean;
	// sprite_imgs: HTMLImageElement[];
	constructor() {
		this.size = Math.random();
		// this.size = Size.small;
		this.scale = 4.0;
		this.color = randomEnum(Color);
		// this.color = Color.blue;
		this.x = Math.random() * 2560;
		this.y = Math.random() * 1440;
		this.frame_change_probability = 0.002;
		this.sprite_frame_index = this.random_sprite_frame();
		// debugger

		this.load_sprite_imgs();
		// this.sprite_imgs = this.get_sprite_imgs();
		this.complete = false;
		// debugger;
	}

	random_sprite_frame() {
		return Math.floor(Math.random() * 3);
	}

	load_sprite_imgs() {


		// hard coded!

		const frame0 = new Image();
		const frame1 = new Image();
		const frame2 = new Image();


		if (this.size > 0.98) { // large

			if (this.color == Color.blue) {
				frame0.src = "/stars/star_blue5.png";
				frame1.src = "/stars/star_blue6.png";
				frame2.src = "/stars/star_blue7.png";
			} else {
				frame0.src = "/stars/star_pink3.png";
				frame1.src = "/stars/star_pink4.png";
				frame2.src = "/stars/star_pink5.png";
			}
		} else if (this.size > 0.92) { // medium
			if (this.color == Color.blue) {
				frame0.src = "/stars/star_blue2.png";
				frame1.src = "/stars/star_blue3.png";
				frame2.src = "/stars/star_blue5.png";
			} else {
				frame0.src = "/stars/star_pink6.png";
				frame1.src = "/stars/star_pink7.png";
				frame2.src = "/stars/star_pink8.png";
			}
		} else { // small
			if (this.color == Color.blue) {
				frame0.src = "/stars/star_blue0.png";
				frame1.src = "/stars/star_blue1.png";
				frame2.src = "/stars/star_blue2.png";
			} else {
				frame0.src = "/stars/star_pink0.png";
				frame1.src = "/stars/star_pink1.png";
				frame2.src = "/stars/star_pink2.png";
			}
		}



		Promise.all([frame0.decode(), frame1.decode(), frame2.decode()]).then(() => {
			this.complete = true;
			// console.log(loaded_sprites)
			this.sprite_imgs = [frame0, frame1, frame2];
			// console.log('sprite images loaded');
			// debugger
		});

		// frame0.decode().then(() => {
		// 	// console.log(result)
		// 	console.log(frame0);
		// 	this.complete = true;
		// 	debugger;
		// });


		// debugger;

		// return [frame0, frame1, frame2];
	}

	maybe_change_frame() {
		if (Math.random() < this.frame_change_probability) {
			this.sprite_frame_index = this.random_sprite_frame();
		}
	}

	draw(ctx: CanvasRenderingContext2D) {
		// some of these values are hard coded!
		if (this.complete) {
			this.maybe_change_frame();
			// console.log(this);
			// debugger;
			ctx.drawImage(this.sprite_imgs[this.sprite_frame_index], 0, 0, 15, 15, this.x, this.y, 15 * this.scale, 15 * this.scale);
		}
	}

	redraw(ctx: CanvasRenderingContext2D) {
		// some of these values are hard coded!
		if (this.complete) {
			ctx.drawImage(this.sprite_imgs[this.sprite_frame_index], 0, 0, 15, 15, this.x, this.y, 15 * this.scale, 15 * this.scale);
		}
	}
}
