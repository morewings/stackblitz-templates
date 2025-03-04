import { Field } from '@headlessui/react';
import { useCallback, useId, useState } from 'react';

import { countryList, CountryConfig } from './countryList.ts';
import { CountryCodeInput } from './CountryCodeInput';
import { PhoneNumberInput } from './PhoneNumberInput';

const App = () => {
  const id = useId();

  // phone number logic
  const [phoneNumber, setPhoneNumber] = useState('');
  const handlePhoneChange = useCallback((value: string) => {
    setPhoneNumber(value);
  }, []);

  // country code logic
  const [countryCode, setCountryCode] = useState<CountryConfig['code']>('+1');
  const handleCodeChange = useCallback((nextCode?: CountryConfig['code']) => {
    if (nextCode) {
      setCountryCode(nextCode);
    }
  }, []);

  const mask = countryList.find(({ code }) => code === countryCode)?.mask;

  return (
    <Field className="flex flex-col gap-2">
      <label className="cursor-pointer text-sm/6 font-medium" htmlFor={id}>
        Phone number:
      </label>
      <div className="flex gap-3">
        <CountryCodeInput
          countryList={countryList}
          value={countryCode}
          onChange={handleCodeChange}
        />
        <PhoneNumberInput
          id={id}
          mask={mask}
          onChange={handlePhoneChange}
          value={phoneNumber}
        />
      </div>
    </Field>
  );
};

export default App;
