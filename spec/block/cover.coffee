contains = require "./helpers/contains"
comparison = require "./helpers/comparison"
equality = require "./helpers/equality"
existence = require "./helpers/existence"
length = require "./helpers/length"


validBlock =
  id: "88c63e90-803b-4a20-8384-a14b0c4900f3"
  cover:
    src: "cover.jpg"
    width: 1600
    height: 900
    orientation: "landscape"

anotherValidBlock =
  id: "88c63e90-803b-4a20-8384-a14b0c4900f4"
  cover:
    src: "cover.png"
    width: 1200
    height: 1920
    orientation: "portrait"

blockWithoutCover =
  id: "88c63e90-803b-4a20-8384-a14b0c4900f3"

blockWithoutCoverSrc =
  id: "88c63e90-803b-4a20-8384-a14b0c4900f3"
  cover:
    width: 1600
    height: 900
    orientation: "landscape"

blockWithoutCoverWidth =
  id: "88c63e90-803b-4a20-8384-a14b0c4900f3"
  cover:
    src: "cover.jpg"
    height: 900
    orientation: "landscape"

blockWithoutCoverHeight =
  id: "88c63e90-803b-4a20-8384-a14b0c4900f3"
  cover:
    src: "cover.jpg"
    width: 1600
    orientation: "landscape"

blockWithoutCoverOrientation =
  id: "88c63e90-803b-4a20-8384-a14b0c4900f3"
  cover:
    src: "cover.jpg"
    width: 1600
    height: 900


equality "cover", validBlock, blockWithoutCover
existence "cover", validBlock, blockWithoutCover

contains "cover.src", validBlock
existence "cover.src", validBlock, blockWithoutCoverSrc
length "cover.src", validBlock

comparison "cover.src.length", validBlock

equality "cover.width", validBlock, anotherValidBlock
existence "cover.width", validBlock, blockWithoutCoverWidth
comparison "cover.width", validBlock

equality "cover.height", validBlock, anotherValidBlock
existence "cover.height", validBlock, blockWithoutCoverHeight
comparison "cover.height", validBlock

equality "cover.orientation", validBlock, anotherValidBlock
existence "cover.orientation", validBlock, blockWithoutCoverOrientation
length "cover.orientation", validBlock


chai = require "chai"
{expect, AssertionError} = chai

grid = require "../../src/regimen"
chai.use grid


describe "cover", ->

  describe "orientation", ->

    context "when expecting a block with a cover with an orientation", ->

      block = validBlock

      context "to have an orientation", ->
        it "should succeed", ->
          expect(block).to.have.a("cover").with.orientation()
          expect(block).to.have.a("cover").with.an.orientation()
          expect(block).to.have.a("cover").orientation()
          expect(block).to.have.a("cover").oriented()

          expect(block).with.a("cover").with.orientation()
          expect(block).with.a("cover").with.an.orientation()
          expect(block).with.a("cover").orientation()
          expect(block).with.a("cover").oriented()

      context "to not have an orientation", ->
        it "should throw an error", ->
          expect(->
            expect(block).to.have.a("cover").not.with.orientation()
          ).to.throw AssertionError

          expect(->
            expect(block).to.have.a("cover").not.with.an.orientation()
          ).to.throw AssertionError

          expect(->
            expect(block).to.have.a("cover").not.oriented()
          ).to.throw AssertionError

          expect(->
            expect(block).with.a("cover").not.with.orientation()
          ).to.throw AssertionError

          expect(->
            expect(block).with.a("cover").not.with.an.orientation()
          ).to.throw AssertionError

          expect(->
            expect(block).with.a("cover").not.oriented()
          ).to.throw AssertionError

      context "to have a specific orientation", ->

        it "should succeed with a valid block", ->
          expect(block).to.have.a("cover").with.orientation "landscape"
          expect(block).with.a("cover").oriented "landscape"

        it "should throw an error with an invalid block", ->
          expect(->
            expect(block).to.have.a("cover").with.orientation "portrait"
          ).to.throw AssertionError

          expect(->
            expect(block).with.a("cover").oriented "portrait"
          ).to.throw AssertionError

      context "to not have a specific orientation", ->

        it "should succeed with an invalid block", ->
          expect(block).to.have.a("cover").not.with.orientation "portrait"
          expect(block).with.a("cover").not.oriented "portrait"

        it "should throw an error with a valid block", ->
          expect(->
            expect(block).to.have.a("cover").not.with.orientation "landscape"
          ).to.throw AssertionError

          expect(->
            expect(block).with.a("cover").not.oriented "landscape"
          ).to.throw AssertionError


    context "when expecting a block with a cover without an orientation", ->

      block = blockWithoutCoverOrientation

      context "to not have an orientation", ->
        it "should succeed", ->
          expect(block).to.have.a("cover").not.with.orientation()
          expect(block).to.have.a("cover").not.with.an.orientation()
          expect(block).to.have.a("cover").not.oriented()

          expect(block).with.a("cover").not.with.orientation()
          expect(block).with.a("cover").not.with.an.orientation()
          expect(block).with.a("cover").not.oriented()

      context "to have an orientation", ->
        it "should throw an error", ->
          expect(->
            expect(block).to.have.a("cover").with.orientation()
          ).to.throw AssertionError

          expect(->
            expect(block).to.have.a("cover").with.an.orientation()
          ).to.throw AssertionError

          expect(->
            expect(block).to.have.a("cover").oriented()
          ).to.throw AssertionError

          expect(->
            expect(block).with.a("cover").with.orientation()
          ).to.throw AssertionError

          expect(->
            expect(block).with.a("cover").with.an.orientation()
          ).to.throw AssertionError

          expect(->
            expect(block).with.a("cover").oriented()
          ).to.throw AssertionError
