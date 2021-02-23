const express = require('express');
const axios = require('axios');
var config = require('config');
var cseurl = "http://" + config.cse.ip + ":" + config.cse.port + "/~/" + config.cse.id + "/" + config.cse.name
const route = require('../routes/stuff');
var releaseVersion = config.cse.releaseVersion;
var originator = config.cse.originator;


exports.getAllAE = async(req, res, next) => {
    try {
        const result = await retrieveAllAE();
        res.send(result);
    } catch (err) {
        res.status(500).send({
            error: 'an error has occured trying to fetch the value'
        })
    }
};

exports.getCnts = async(req, res, next) => {
    try {
        let name = req.params.name;
        const result = await retrieveCnts(name);
        console.log(result.data);

        res.send(result);
    } catch (err) {
        res.status(500).send({
            error: 'an error has occured trying to fetch the value'
        })
    }

};


exports.getAllCin = async(req, res, next) => {
    try {
        let name = req.params.name;
        let cntname = req.params.cntname;
        const result = await retrieveAllCin(name, cntname);
        console.log(result.data);

        res.send(result);
    } catch (err) {
        res.status(500).send({
            error: 'an error has occured trying to fetch the value'
        })
    }

};
exports.getCin = async(req, res, next) => {
    try {
        let name = req.params.name;
        let cntname = req.params.cntname;
        const result = await retrieveCin(name, cntname);
        console.log(result.data);
        res.send(result);
    } catch (err) {
        res.status(500).send({
            error: 'an error has occured trying to fetch the value'
        })
    }

};


async function retrieveAllAE() {
    var uri = cseurl + "?rcn=4";
    var requestId = Math.floor(Math.random() * 10000);

    try {
        const result = await axios({
            url: uri,
            method: 'get',
            timeout: 8000,
            headers: {
                'Content-Type': 'application/json',
                'X-M2M-Origin': originator,
                'X-M2M-RI': requestId,
                'Accept': 'application/json',
                'X-M2M-RVI': releaseVersion
            }
        })
        if (result.status == 200) {
            console.log(result.status)
        }

        return result.data["m2m:cb"]["m2m:ae"];

    } catch (err) {
        console.log('can not retrieve data');

    }


}

async function retrieveCnts(name) {
    var uri = cseurl + "/" + name + "?rcn=4";
    var requestId = Math.floor(Math.random() * 10000);

    try {
        const result = await axios({
            url: uri,
            method: 'get',

            timeout: 8000,
            headers: {
                'Content-Type': 'application/json',
                'X-M2M-Origin': originator,
                'X-M2M-RI': requestId,
                'Accept': 'application/json',
                'X-M2M-RVI': releaseVersion

            }
        })
        if (result.status == 200) {
            console.log(result.status)
        }
        return result.data;

    } catch (err) {
        console.log('can not retrieve data');

    }


}

async function retrieveAllCin(name, cntname) {
    var uri = cseurl + "/" + name + "/" + cntname + "?rcn=4";
    var requestId = Math.floor(Math.random() * 10000);

    try {
        const result = await axios({
            url: uri,
            method: 'get',

            timeout: 8000,
            headers: {
                'Content-Type': 'application/json',
                'X-M2M-Origin': originator,
                'X-M2M-RI': requestId,
                'Accept': 'application/json',
                'X-M2M-RVI': releaseVersion
            },

        })
        if (result.status == 200) {
            console.log(result.status)
        }
        return result.data;

    } catch (err) {
        console.log('can not retrieve data');

    }


}


async function retrieveCin(name, cntname) {
    var uri = cseurl + "/" + name + "/" + cntname + "/la";
    var requestId = Math.floor(Math.random() * 10000);
    try {
        const result = await axios({
            url: uri,
            method: 'get',

            timeout: 8000,
            headers: {
                'Content-Type': 'application/json',
                'X-M2M-Origin': originator,
                'X-M2M-RI': requestId,
                'Accept': 'application/json',
                'X-M2M-RVI': releaseVersion
            }
        })
        if (result.status == 200) {
            console.log(result.status)
        }
        return result.data;

    } catch (err) {
        console.log('can not retrieve data');

    }


}



function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}