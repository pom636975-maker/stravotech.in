
import React, { useState } from 'react';

const ScientificCalculatorInterface: React.FC = () => {
  const [display, setDisplay] = useState('0');

  const btn = (label: string, action: () => void, color = 'bg-slate-100 text-slate-900') => (
    <button onClick={action} className={`min-h-12 p-3 sm:p-4 rounded-2xl font-black text-sm hover:scale-105 active:scale-95 transition-all ${color}`}>
      {label}
    </button>
  );

  const addChar = (char: string) => {
    setDisplay(prev => prev === '0' ? char : prev + char);
  };

  const calculate = () => {
    try {
      const res = evaluateExpression(display);
      if (!Number.isFinite(res)) throw new Error('Invalid result');
      setDisplay(String(res));
    } catch {
      setDisplay('Error');
    }
  };

  return (
    <div className="p-4 sm:p-8 lg:p-12">
      <div className="max-w-md mx-auto bg-white rounded-[2rem] sm:rounded-[3rem] p-4 sm:p-8 border border-slate-200 shadow-2xl">
        <div className="bg-slate-50 p-5 sm:p-8 rounded-3xl mb-6 sm:mb-8 text-right overflow-hidden border border-slate-100">
           <span className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight break-all">{display}</span>
        </div>

        <div className="grid grid-cols-4 gap-3">
           {btn('AC', () => setDisplay('0'), 'bg-red-50 text-red-600')}
           {btn('sin', () => setDisplay(String(Math.sin(parseFloat(display)))))}
           {btn('cos', () => setDisplay(String(Math.cos(parseFloat(display)))))}
           {btn('/', () => addChar('/'), 'bg-indigo-50 text-indigo-600')}

           {btn('7', () => addChar('7'))}
           {btn('8', () => addChar('8'))}
           {btn('9', () => addChar('9'))}
           {btn('*', () => addChar('*'), 'bg-indigo-50 text-indigo-600')}

           {btn('4', () => addChar('4'))}
           {btn('5', () => addChar('5'))}
           {btn('6', () => addChar('6'))}
           {btn('-', () => addChar('-'), 'bg-indigo-50 text-indigo-600')}

           {btn('1', () => addChar('1'))}
           {btn('2', () => addChar('2'))}
           {btn('3', () => addChar('3'))}
           {btn('+', () => addChar('+'), 'bg-indigo-50 text-indigo-600')}

           {btn('0', () => addChar('0'))}
           {btn('.', () => addChar('.'))}
           {btn('sqrt', () => setDisplay(String(Math.sqrt(parseFloat(display)))))}
           {btn('=', calculate, 'bg-indigo-600 text-white')}
        </div>
      </div>
    </div>
  );
};

const evaluateExpression = (input: string): number => {
  let index = 0;
  const source = input.replace(/\s+/g, '');

  const parseNumber = () => {
    const start = index;
    while (/[0-9.]/.test(source[index] || '')) index += 1;
    if (start === index) throw new Error('Expected number');
    const value = Number(source.slice(start, index));
    if (!Number.isFinite(value)) throw new Error('Invalid number');
    return value;
  };

  const parseFactor = (): number => {
    if (source[index] === '+') {
      index += 1;
      return parseFactor();
    }
    if (source[index] === '-') {
      index += 1;
      return -parseFactor();
    }
    if (source[index] === '(') {
      index += 1;
      const value = parseExpression();
      if (source[index] !== ')') throw new Error('Expected closing parenthesis');
      index += 1;
      return value;
    }
    return parseNumber();
  };

  const parseTerm = (): number => {
    let value = parseFactor();
    while (source[index] === '*' || source[index] === '/') {
      const operator = source[index];
      index += 1;
      const next = parseFactor();
      value = operator === '*' ? value * next : value / next;
    }
    return value;
  };

  const parseExpression = (): number => {
    let value = parseTerm();
    while (source[index] === '+' || source[index] === '-') {
      const operator = source[index];
      index += 1;
      const next = parseTerm();
      value = operator === '+' ? value + next : value - next;
    }
    return value;
  };

  const result = parseExpression();
  if (index !== source.length) throw new Error('Unexpected token');
  return result;
};

export default ScientificCalculatorInterface;
