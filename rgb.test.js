const { expect } = require('chai');
const { rgbToHexColor } = require('./rgb');

describe('RGBtoHexColor', () => {
  it('coverts black', () => {
    expect(rgbToHexColor(0, 0, 0)).to.equal('#000000');
  });

  it('coverts white', () => {
    expect(rgbToHexColor(255, 255, 255)).to.equal('#FFFFFF');
  });

  it('coverts softUni blue to #234465', () => {
    expect(rgbToHexColor(35, 68, 101)).to.equal('#234465');
  });

  it('coverts 15, 15, 15 to #234465', () => {
    expect(rgbToHexColor(15, 15, 15)).to.equal('#0F0F0F');
  });

  it('return undefined for missing params', () => {
    expect(rgbToHexColor(0, 0)).to.be.undefined;
    expect(rgbToHexColor(0)).to.be.undefined;
    expect(rgbToHexColor()).to.be.undefined;
  });

  it('return undefined for out lower bound', () => {
    expect(rgbToHexColor(-1, 0, 0)).to.be.undefined;
    expect(rgbToHexColor(0, -1, 0)).to.be.undefined;
    expect(rgbToHexColor(0, 0, -1)).to.be.undefined;
  });

  it('return undefined for out upper bound', () => {
    expect(rgbToHexColor(256, 0, 0)).to.be.undefined;
    expect(rgbToHexColor(0, 256, 0)).to.be.undefined;
    expect(rgbToHexColor(0, 0, 256)).to.be.undefined;
  });

  it('return undefined for floats', () => {
    expect(rgbToHexColor(1.1, 0, 0)).to.be.undefined;
    expect(rgbToHexColor(0, 1.1, 0)).to.be.undefined;
    expect(rgbToHexColor(0, 0, 1.1)).to.be.undefined;
  });

  it('return undefined for floats', () => {
    expect(rgbToHexColor(1.1, 0, 0)).to.be.undefined;
    expect(rgbToHexColor(0, 1.1, 0)).to.be.undefined;
    expect(rgbToHexColor(0, 0, 1.1)).to.be.undefined;
  });

  it('return undefined for floats', () => {
    expect(rgbToHexColor('1', 0, 0)).to.be.undefined;
    expect(rgbToHexColor(0, '1', 0)).to.be.undefined;
    expect(rgbToHexColor(0, 0, '1')).to.be.undefined;
  });
});