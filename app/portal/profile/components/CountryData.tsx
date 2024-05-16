import React from 'react'

const CountryData = () => {
  return (
    <>
        <div className="mb-6">
          <label htmlFor="country" className="block text-gray-700 font-semibold mb-2">Country/Region</label>
          <input list="countrydata" id="country" name="country" className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            <datalist id="countrydata4">
                <option value="AF" label="Afghanistan" />
                <option value="AX" label="Åland Islands" />
                <option value="AL" label="Albania" />
                <option value="DZ" label="Algeria" />
                <option value="AS" label="American Samoa" />
                <option value="AD" label="Andorra" />
                <option value="AO" label="Angola" />
                <option value="AI" label="Anguilla" />
                <option value="AQ" label="Antarctica" />
                <option value="AG" label="Antigua and Barbuda" />
                <option value="AR" label="Argentina" />
                <option value="AM" label="Armenia" />
                <option value="AW" label="Aruba" />
                <option value="AU" label="Australia" />
                <option value="AT" label="Austria" />
                <option value="AZ" label="Azerbaijan" />
                <option value="BS" label="Bahamas" />
                <option value="BH" label="Bahrain" />
                <option value="BD" label="Bangladesh" />
                <option value="BB" label="Barbados" />
                <option value="BY" label="Belarus" />
                <option value="BE" label="Belgium" />
                <option value="BZ" label="Belize" />
                <option value="BJ" label="Benin" />
                <option value="BM" label="Bermuda" />
                <option value="BT" label="Bhutan" />
                <option value="BO" label="Bolivia (Plurinational State of)" />
                <option value="BQ" label="Bonaire, Sint Eustatius and Saba" />
                <option value="BA" label="Bosnia and Herzegovina" />
                <option value="BW" label="Botswana" />
                <option value="BV" label="Bouvet Island" />
                <option value="BR" label="Brazil" />
                <option value="IO" label="British Indian Ocean Territory" />
                <option value="BN" label="Brunei Darussalam" />
                <option value="BG" label="Bulgaria" />
                <option value="BF" label="Burkina Faso" />
                <option value="BI" label="Burundi" />
                <option value="CV" label="Cabo Verde" />
                <option value="KH" label="Cambodia" />
                <option value="CM" label="Cameroon" />
                <option value="CA" label="Canada" />
                <option value="KY" label="Cayman Islands" />
                <option value="CF" label="Central African Republic" />
                <option value="TD" label="Chad" />
                <option value="CL" label="Chile" />
                <option value="CN" label="China" />
                <option value="CX" label="Christmas Island" />
                <option value="CC" label="Cocos (Keeling) Islands" />
                <option value="CO" label="Colombia" />
                <option value="KM" label="Comoros" />
                <option value="CG" label="Congo" />
                <option value="CD" label="Congo, Democratic Republic of the" />
                <option value="CK" label="Cook Islands" />
                <option value="CR" label="Costa Rica" />
                <option value="CI" label="Côte d'Ivoire" />
                <option value="HR" label="Croatia" />
                <option value="CU" label="Cuba" />
                <option value="CW" label="Curaçao" />
                <option value="CY" label="Cyprus" />
                <option value="CZ" label="Czechia" />
                <option value="DK" label="Denmark" />
                <option value="DJ" label="Djibouti" />
                <option value="DM" label="Dominica" />
                <option value="DO" label="Dominican Republic" />
                <option value="EC" label="Ecuador" />
                <option value="EG" label="Egypt" />
                <option value="SV" label="El Salvador" />
                <option value="GQ" label="Equatorial Guinea" />
                <option value="ER" label="Eritrea" />
                <option value="EE" label="Estonia" />
                <option value="SZ" label="Eswatini" />
                <option value="ET" label="Ethiopia" />
                <option value="FK" label="Falkland Islands (Malvinas)" />
                <option value="FO" label="Faroe Islands" />
                <option value="FJ" label="Fiji" />
                <option value="FI" label="Finland" />
                <option value="FR" label="France" />
                <option value="GF" label="French Guiana" />
                <option value="PF" label="French Polynesia" />
                <option value="TF" label="French Southern Territories" />
                <option value="GA" label="Gabon" />
                <option value="GM" label="Gambia" />
                <option value="GE" label="Georgia" />
                <option value="DE" label="Germany" />
                <option value="GH" label="Ghana" />
                <option value="GI" label="Gibraltar" />
                <option value="GR" label="Greece" />
                <option value="GL" label="Greenland" />
                <option value="GD" label="Grenada" />
                <option value="GP" label="Guadeloupe" />
                <option value="GU" label="Guam" />
                <option value="GT" label="Guatemala" />
                <option value="GG" label="Guernsey" />
                <option value="GN" label="Guinea" />
                <option value="GW" label="Guinea-Bissau" />
                <option value="GY" label="Guyana" />
                <option value="HT" label="Haiti" />
                <option value="HM" label="Heard Island and McDonald Islands" />
                <option value="VA" label="Holy See" />
                <option value="HN" label="Honduras" />
                <option value="HK" label="Hong Kong" />
                <option value="HU" label="Hungary" />
                <option value="IS" label="Iceland" />
                <option value="IN" label="India" />
                <option value="ID" label="Indonesia" />
                <option value="IR" label="Iran (Islamic Republic of)" />
                <option value="IQ" label="Iraq" />
                <option value="IE" label="Ireland" />
                <option value="IM" label="Isle of Man" />
                <option value="IL" label="Israel" />
                <option value="IT" label="Italy" />
                <option value="JM" label="Jamaica" />
                <option value="JP" label="Japan" />
                <option value="JE" label="Jersey" />
                <option value="JO" label="Jordan" />
                <option value="KZ" label="Kazakhstan" />
                <option value="KE" label="Kenya" />
                <option value="KI" label="Kiribati" />
                <option value="KP" label="Korea (Democratic People's Republic of)" />
                <option value="KR" label="Korea, Republic of" />
                <option value="KW" label="Kuwait" />
                <option value="KG" label="Kyrgyzstan" />
                <option value="LA" label="Lao People's Democratic Republic" />
                <option value="LV" label="Latvia" />
                <option value="LB" label="Lebanon" />
                <option value="LS" label="Lesotho" />
                <option value="LR" label="Liberia" />
                <option value="LY" label="Libya" />
                <option value="LI" label="Liechtenstein" />
                <option value="LT" label="Lithuania" />
                <option value="LU" label="Luxembourg" />
                <option value="MO" label="Macao" />
                <option value="MG" label="Madagascar" />
                <option value="MW" label="Malawi" />
                <option value="MY" label="Malaysia" />
                <option value="MV" label="Maldives" />
                <option value="ML" label="Mali" />
                <option value="MT" label="Malta" />
                <option value="MH" label="Marshall Islands" />
                <option value="MQ" label="Martinique" />
                <option value="MR" label="Mauritania" />
                <option value="MU" label="Mauritius" />
                <option value="YT" label="Mayotte" />
                <option value="MX" label="Mexico" />
                <option value="FM" label="Micronesia (Federated States of)" />
                <option value="MD" label="Moldova, Republic of" />
                <option value="MC" label="Monaco" />
                <option value="MN" label="Mongolia" />
                <option value="ME" label="Montenegro" />
                <option value="MS" label="Montserrat" />
                <option value="MA" label="Morocco" />
                <option value="MZ" label="Mozambique" />
                <option value="MM" label="Myanmar" />
                <option value="NA" label="Namibia" />
                <option value="NR" label="Nauru" />
                <option value="NP" label="Nepal" />
                <option value="NL" label="Netherlands" />
                <option value="NC" label="New Caledonia" />
                <option value="NZ" label="New Zealand" />
                <option value="NI" label="Nicaragua" />
                <option value="NE" label="Niger" />
                <option value="NG" label="Nigeria" />
                <option value="NU" label="Niue" />
                <option value="NF" label="Norfolk Island" />
                <option value="MK" label="North Macedonia" />
                <option value="MP" label="Northern Mariana Islands" />
                <option value="NO" label="Norway" />
                <option value="OM" label="Oman" />
                <option value="PK" label="Pakistan" />
                <option value="PW" label="Palau" />
                <option value="PS" label="Palestine, State of" />
                <option value="PA" label="Panama" />
                <option value="PG" label="Papua New Guinea" />
                <option value="PY" label="Paraguay" />
                <option value="PE" label="Peru" />
                <option value="PH" label="Philippines" />
                <option value="PN" label="Pitcairn" />
                <option value="PL" label="Poland" />
                <option value="PT" label="Portugal" />
                <option value="PR" label="Puerto Rico" />
                <option value="QA" label="Qatar" />
                <option value="RE" label="Réunion" />
                <option value="RO" label="Romania" />
                <option value="RU" label="Russian Federation" />
                <option value="RW" label="Rwanda" />
                <option value="BL" label="Saint Barthélemy" />
                <option value="SH" label="Saint Helena, Ascension and Tristan da Cunha" />
                <option value="KN" label="Saint Kitts and Nevis" />
                <option value="LC" label="Saint Lucia" />
                <option value="MF" label="Saint Martin (French part)" />
                <option value="PM" label="Saint Pierre and Miquelon" />
                <option value="VC" label="Saint Vincent and the Grenadines" />
                <option value="WS" label="Samoa" />
                <option value="SM" label="San Marino" />
                <option value="ST" label="Sao Tome and Principe" />
                <option value="SA" label="Saudi Arabia" />
                <option value="SN" label="Senegal" />
                <option value="RS" label="Serbia" />
                <option value="SC" label="Seychelles" />
                <option value="SL" label="Sierra Leone" />
                <option value="SG" label="Singapore" />
                <option value="SX" label="Sint Maarten (Dutch part)" />
                <option value="SK" label="Slovakia" />
                <option value="SI" label="Slovenia" />
                <option value="SB" label="Solomon Islands" />
                <option value="SO" label="Somalia" />
                <option value="ZA" label="South Africa" />
                <option value="GS" label="South Georgia and the South Sandwich Islands" />
                <option value="SS" label="South Sudan" />
                <option value="ES" label="Spain" />
                <option value="LK" label="Sri Lanka" />
                <option value="SD" label="Sudan" />
                <option value="SR" label="Suriname" />
                <option value="SJ" label="Svalbard and Jan Mayen" />
                <option value="SE" label="Sweden" />
                <option value="CH" label="Switzerland" />
                <option value="SY" label="Syrian Arab Republic" />
                <option value="TW" label="Taiwan, Province of China" />
                <option value="TJ" label="Tajikistan" />
                <option value="TZ" label="Tanzania, United Republic of" />
                <option value="TH" label="Thailand" />
                <option value="TL" label="Timor-Leste" />
                <option value="TG" label="Togo" />
                <option value="TK" label="Tokelau" />
                <option value="TO" label="Tonga" />
                <option value="TT" label="Trinidad and Tobago" />
                <option value="TN" label="Tunisia" />
                <option value="TR" label="Turkey" />
                <option value="TM" label="Turkmenistan" />
                <option value="TC" label="Turks and Caicos Islands" />
                <option value="TV" label="Tuvalu" />
                <option value="UG" label="Uganda" />
                <option value="UA" label="Ukraine" />
                <option value="AE" label="United Arab Emirates" />
                <option value="GB" label="United Kingdom of Great Britain and Northern Ireland" />
                <option value="UM" label="United States Minor Outlying Islands" />
                <option value="US" label="United States of America" />
                <option value="UY" label="Uruguay" />
                <option value="UZ" label="Uzbekistan" />
                <option value="VU" label="Vanuatu" />
                <option value="VE" label="Venezuela (Bolivarian Republic of)" />
                <option value="VN" label="Viet Nam" />
                <option value="VG" label="Virgin Islands (British)" />
                <option value="VI" label="Virgin Islands (U.S.)" />
                <option value="WF" label="Wallis and Futuna" />
                <option value="EH" label="Western Sahara" />
                <option value="YE" label="Yemen" />
                <option value="ZM" label="Zambia" />
                <option value="ZW" label="Zimbabwe" />
            </datalist>
        </div>
    </>
  )
}

export default CountryData