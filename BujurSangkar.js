import PersegiPanjang from './PersegiPanjang.js';

class BujurSangkar extends PersegiPanjang{
	constructor(ctx, x, y, s, color) {
    super(ctx, x, y, s, s, color);
  }
}

export default BujurSangkar;