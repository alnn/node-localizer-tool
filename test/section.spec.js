'use strict';

/*
require('sinon-mongoose');
require('../src/models/section');

const chai = require('chai');
const expect = chai.expect;
const Mongoose = require('mongoose');
const Sinon = require('sinon');

const Section = Mongoose.model('Section');


describe('Creating new Section', () => {

  // Will pass if section is saved
  it('Should create new section', (done) => {

    const SectionMock = Sinon.mock(new Section({ name: 'Front' }));
    const section = SectionMock.object;

    SectionMock.expects('save').yields(null, { status: true });
    section.save((error, result) => {

      SectionMock.verify();
      SectionMock.restore();

      expect(result.status).to.be.true;
      done();
    });

  });

  // Will pass if section is not saved
  it('Should return error, if section not created', (done) => {

    const SectionMock = Sinon.mock(new Section({ name: 'Front' }));
    const section = SectionMock.object;

    SectionMock.expects('save').yields({ status: false }, null);
    section.save((error) => {

      SectionMock.verify();
      SectionMock.restore();

      expect(error.status).to.not.be.true;
      done();
    });

  });

});

describe('Get all sections', () => {

  it('Should return all sections', (done) => {
    const SectionMock = Sinon.mock(Section);

    SectionMock.expects('find').yields(null, { status: true, section: [] });
    Section.find((error, result) => {
      SectionMock.verify();
      SectionMock.restore();

      expect(result.status).to.be.true;
      done();

    });

  });

});
  */