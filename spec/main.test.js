/**
 * Created by 徐涛焘 on 11/23/2017.
 */
"use strict"
let main = require("../lib/main.js");
let expect = require('chai').expect;
describe("Word Frequency",function () {
    it("returns empty string given empty string",function () {
        let result = main('');
        expect(result).to.equal('');
    });

    it("returns empty string given one world",function () {
        let result = main('he');
        expect(result).to.equal('he 1');
    });
});