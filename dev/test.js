const Blockchain = require('./blockchain');

const bitcoin = new Blockchain();

bitcoin.createNewBlock(2389, 'OINDFDFA', '9030adadfasdfa');
bitcoin.createNewTransaction(100, 'ALEX89ANSDF', 'JENNNUUN00033d');
bitcoin.createNewBlock(23133189, 'OI23ddaNDFDFA', 'qwerscadfe231dadfasdfa');

bitcoin.createNewTransaction(50, 'ALEX89ANSDF', 'JENNNUUN00033d');
bitcoin.createNewTransaction(300, 'ALEX89ANSDF', 'JENNNUUN00033d');
bitcoin.createNewTransaction(2000, 'ALEX89ANSDF', 'JENNNUUN00033d');

bitcoin.createNewBlock(12343232, 'asdfqrgfd2323', 'qwesf423fefgafsdf');

const previousBlockHash = '1254asdf23423';
const currentBlockData = [
	{
		amount: 10,
		sender: 'nasdfasdf',
		recipient: '123asdf3'
	},
	{
		amount: 30,
		sender: 'nasdfasdf',
		recipient: '123asdf3'
	},
	{
		amount: 200,
		sender: 'nasdfasdf',
		recipient: '123asdf3'
	}
]

const nonce = bitcoin.proofOfWork(previousBlockHash, currentBlockData);
const hash = bitcoin.hashBlock(previousBlockHash, currentBlockData, nonce);
console.log(hash);
