import test from './test.js'
import { round } from './digit.js'
/**
 * @description 
 * @param {number} min 
 * @param {number} max 
 * @param {number} value
 */
function range(min = 0, max = 0, value = 0) {
	return Math.max(min, Math.min(max, Number(value)))
}

/**
 * @description 
 * @param {number|string} value 
 * @param {boolean} unit 
 * @returns {number|string}
 */
function getPx(value, unit = false) {
	if (test.number(value)) {
		return unit ? `${value}px` : Number(value)
	}
	
	if (/(rpx|upx)$/.test(value)) {
		return unit ? `${uni.upx2px(parseInt(value))}px` : Number(uni.upx2px(parseInt(value)))
	}
	return unit ? `${parseInt(value)}px` : parseInt(value)
}

/**
 * @description 
 * @param {number} 
 * @returns {Promise} 
 */
function sleep(value = 30) {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve()
		}, value)
	})
}
/**
 * @description 
 * @returns {string} 
 * @link 
 */
function os() {
	return uni.getSystemInfoSync().platform.toLowerCase()
}
/**
 * @description 
 * @link 
 */
function sys() {
	return uni.getSystemInfoSync()
}

/**
 * @description 
 * @param {Number} min 
 * @param {Number} max
 */
function random(min, max) {
	if (min >= 0 && max > 0 && max >= min) {
		const gab = max - min + 1
		return Math.floor(Math.random() * gab + min)
	}
	return 0
}

/**
 * @param {Number} len 
 * @param {Boolean} firstU 
 * @param {Nubmer} radix 
 */
function guid(len = 32, firstU = true, radix = null) {
	const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('')
	const uuid = []
	radix = radix || chars.length

	if (len) {
		for (let i = 0; i < len; i++) uuid[i] = chars[0 | Math.random() * radix]
	} else {
		let r
	
		uuid[8] = uuid[13] = uuid[18] = uuid[23] = '-'
		uuid[14] = '4'

		for (let i = 0; i < 36; i++) {
			if (!uuid[i]) {
				r = 0 | Math.random() * 16
				uuid[i] = chars[(i == 19) ? (r & 0x3) | 0x8 : r]
			}
		}
	}

	if (firstU) {
		uuid.shift()
		return `u${uuid.join('')}`
	}
	return uuid.join('')
}

/**
* @description 
*  @param {string|undefined} name 
*/
function $parent(name = undefined) {
	let parent = this.$parent
	
	while (parent) {
		
		if (parent.$options && parent.$options.name !== name) {
			
			parent = parent.$parent
		} else {
			return parent
		}
	}
	return false
}

/**
 * @description 
 * 
 * @param {object | string}
 * @param {String} 
 * @returns {object|string}
 */
function addStyle(customStyle, target = 'object') {

	if (test.empty(customStyle) || typeof(customStyle) === 'object' && target === 'object' || target === 'string' &&
		typeof(customStyle) === 'string') {
		return customStyle
	}

	if (target === 'object') {

		customStyle = trim(customStyle)
		
		const styleArray = customStyle.split(';')
		const style = {}

		for (let i = 0; i < styleArray.length; i++) {
		
			if (styleArray[i]) {
				const item = styleArray[i].split(':')
				style[trim(item[0])] = trim(item[1])
			}
		}
		return style
	}

	let string = ''
	for (const i in customStyle) {

		const key = i.replace(/([A-Z])/g, '-$1').toLowerCase()
		string += `${key}:${customStyle[i]};`
	}

	return trim(string)
}

/**
 * @description 
 * @param {string|number} value 
 * @param {string} unit
 */
function addUnit(value = 'auto', unit = uni?.$u?.config?.unit ?? 'px') {
	value = String(value)

	return test.number(value) ? `${value}${unit}` : value
}

/**
 * @description 
 * @param {object} obj 
 * @returns {*} 
 */
function deepClone(obj) {

	if ([null, undefined, NaN, false].includes(obj)) return obj
	if (typeof obj !== 'object' && typeof obj !== 'function') {

		return obj
	}
	const o = test.array(obj) ? [] : {}
	for (const i in obj) {
		if (obj.hasOwnProperty(i)) {
			o[i] = typeof obj[i] === 'object' ? deepClone(obj[i]) : obj[i]
		}
	}
	return o
}

/**
 * @description JS
 * @param {object} target 
 * @param {object} source 
 * @returns {object|boolean} false
 */
function deepMerge(target = {}, source = {}) {
	target = deepClone(target)
	if (typeof target !== 'object' || typeof source !== 'object') return false
	for (const prop in source) {
		if (!source.hasOwnProperty(prop)) continue
		if (prop in target) {
			if (typeof target[prop] !== 'object') {
				target[prop] = source[prop]
			} else if (typeof source[prop] !== 'object') {
				target[prop] = source[prop]
			} else if (target[prop].concat && source[prop].concat) {
				target[prop] = target[prop].concat(source[prop])
			} else {
				target[prop] = deepMerge(target[prop], source[prop])
			}
		} else {
			target[prop] = source[prop]
		}
	}
	return target
}

/**
 * @description error
 * @param {*} err 
 */
function error(err) {

	if (process.env.NODE_ENV === 'development') {
		console.error(`uView prompt：${err}`)
	}
}

/**
 * @description 
 * @param {array}
 * @returns {array} 
 */
function randomArray(array = []) {
	return array.sort(() => Math.random() - 0.5)
}

if (!String.prototype.padStart) {
	String.prototype.padStart = function(maxLength, fillString = ' ') {
		if (Object.prototype.toString.call(fillString) !== '[object String]') {
			throw new TypeError(
				'fillString must be String'
			)
		}
		const str = this
		if (str.length >= maxLength) return String(str)

		const fillLength = maxLength - str.length
		let times = Math.ceil(fillLength / fillString.length)
		while (times >>= 1) {
			fillString += fillString
			if (times === 1) {
				fillString += fillString
			}
		}
		return fillString.slice(0, fillLength) + str
	}
}

/**
 * @description 
 * @param {String|Number} dateTime 
 * @param {String} fmt  
 * @returns {string} 
 */
 function timeFormat(dateTime = null, formatStr = 'yyyy-mm-dd') {
  let date
  if (!dateTime) {
    date = new Date()
  }
  else if (/^\d{10}$/.test(dateTime?.toString().trim())) {
    date = new Date(dateTime * 1000)
  }
  else if (typeof dateTime === 'string' && /^\d+$/.test(dateTime.trim())) {
    date = new Date(Number(dateTime))
  }
  else {
    date = new Date(
      typeof dateTime === 'string'
        ? dateTime.replace(/-/g, '/')
        : dateTime
    )
  }

	const timeSource = {
		'y': date.getFullYear().toString(), 
		'm': (date.getMonth() + 1).toString().padStart(2, '0'), 
		'd': date.getDate().toString().padStart(2, '0'), 
		'h': date.getHours().toString().padStart(2, '0'), 
		'M': date.getMinutes().toString().padStart(2, '0'), 
		's': date.getSeconds().toString().padStart(2, '0') 
	}

  for (const key in timeSource) {
    const [ret] = new RegExp(`${key}+`).exec(formatStr) || []
    if (ret) {
      const beginIndex = key === 'y' && ret.length === 2 ? 2 : 0
      formatStr = formatStr.replace(ret, timeSource[key].slice(beginIndex))
    }
  }

  return formatStr
}

/**
 * @description 
 * @param {String|Number} timestamp 
 * @param {String|Boolean} format 
 * @returns {string} 
 */
function timeFrom(timestamp = null, format = 'yyyy-mm-dd') {
	if (timestamp == null) timestamp = Number(new Date())
	timestamp = parseInt(timestamp)
	if (timestamp.toString().length == 10) timestamp *= 1000
	let timer = (new Date()).getTime() - timestamp
	timer = parseInt(timer / 1000)
	let tips = ''
	switch (true) {
		case timer < 300:
			tips = 'Just now'
			break
		case timer >= 300 && timer < 3600:
			tips = `${parseInt(timer / 60)}Minutes ago`
			break
		case timer >= 3600 && timer < 86400:
			tips = `${parseInt(timer / 3600)}Hours ago`
			break
		case timer >= 86400 && timer < 2592000:
			tips = `${parseInt(timer / 86400)}days ago`
			break
		default:

			if (format === false) {
				if (timer >= 2592000 && timer < 365 * 86400) {
					tips = `${parseInt(timer / (86400 * 30))}months ago`
				} else {
					tips = `${parseInt(timer / (86400 * 365))}years ago`
				}
			} else {
				tips = timeFormat(timestamp, format)
			}
	}
	return tips
}

/**
 * @description 
 * @param String str 
 * @param String pos
 */
function trim(str, pos = 'both') {
	str = String(str)
	if (pos == 'both') {
		return str.replace(/^\s+|\s+$/g, '')
	}
	if (pos == 'left') {
		return str.replace(/^\s*/, '')
	}
	if (pos == 'right') {
		return str.replace(/(\s*$)/g, '')
	}
	if (pos == 'all') {
		return str.replace(/\s+/g, '')
	}
	return str
}

/**
 * @description 
 * @param {object} data
 * @param {Boolean} isPrefix
 * @param {string} arrayFormat 
 */
function queryParams(data = {}, isPrefix = true, arrayFormat = 'brackets') {
	const prefix = isPrefix ? '?' : ''
	const _result = []
	if (['indices', 'brackets', 'repeat', 'comma'].indexOf(arrayFormat) == -1) arrayFormat = 'brackets'
	for (const key in data) {
		const value = data[key]

		if (['', undefined, null].indexOf(value) >= 0) {
			continue
		}
		if (value.constructor === Array) {
			// e.g. {ids: [1, 2, 3]}
			switch (arrayFormat) {
				case 'indices':
					//  ids[0]=1&ids[1]=2&ids[2]=3
					for (let i = 0; i < value.length; i++) {
						_result.push(`${key}[${i}]=${value[i]}`)
					}
					break
				case 'brackets':
					//  ids[]=1&ids[]=2&ids[]=3
					value.forEach((_value) => {
						_result.push(`${key}[]=${_value}`)
					})
					break
				case 'repeat':
					//  ids=1&ids=2&ids=3
					value.forEach((_value) => {
						_result.push(`${key}=${_value}`)
					})
					break
				case 'comma':
					//  ids=1,2,3
					let commaStr = ''
					value.forEach((_value) => {
						commaStr += (commaStr ? ',' : '') + _value
					})
					_result.push(`${key}=${commaStr}`)
					break
				default:
					value.forEach((_value) => {
						_result.push(`${key}[]=${_value}`)
					})
			}
		} else {
			_result.push(`${key}=${value}`)
		}
	}
	return _result.length ? prefix + _result.join('&') : ''
}

/**
 * 
 * @param {String} title 
 * @param {Number} duration 
 */
function toast(title, duration = 2000) {
	uni.showToast({
		title: String(title),
		icon: 'none',
		duration
	})
}

/**
 * @description 
 * @param {String} type 
 * @param {boolean} fill 
 */
function type2icon(type = 'success', fill = false) {

	if (['primary', 'info', 'error', 'warning', 'success'].indexOf(type) == -1) type = 'success'
	let iconName = ''
	switch (type) {
		case 'primary':
			iconName = 'info-circle'
			break
		case 'info':
			iconName = 'info-circle'
			break
		case 'error':
			iconName = 'close-circle'
			break
		case 'warning':
			iconName = 'error-circle'
			break
		case 'success':
			iconName = 'checkmark-circle'
			break
		default:
			iconName = 'checkmark-circle'
	}
	if (fill) iconName += '-fill'
	return iconName
}

/**
 * @description 
 * @param {number|string} number 
 * @param {number} decimals 
 * @param {string} decimalPoint 
 * @param {string} thousandsSeparator 
 * @returns {string} 
 */
function priceFormat(number, decimals = 0, decimalPoint = '.', thousandsSeparator = ',') {
	number = (`${number}`).replace(/[^0-9+-Ee.]/g, '')
	const n = !isFinite(+number) ? 0 : +number
	const prec = !isFinite(+decimals) ? 0 : Math.abs(decimals)
	const sep = (typeof thousandsSeparator === 'undefined') ? ',' : thousandsSeparator
	const dec = (typeof decimalPoint === 'undefined') ? '.' : decimalPoint
	let s = ''

	s = (prec ? round(n, prec) + '' : `${Math.round(n)}`).split('.')
	const re = /(-?\d+)(\d{3})/
	while (re.test(s[0])) {
		s[0] = s[0].replace(re, `$1${sep}$2`)
	}
	
	if ((s[1] || '').length < prec) {
		s[1] = s[1] || ''
		s[1] += new Array(prec - s[1].length + 1).join('0')
	}
	return s.join(dec)
}

/**
 * @description 
 * @param {String|number} value
 * @param {boolean} unit
 * @return {string|number} 
 */
function getDuration(value, unit = true) {
	const valueNum = parseInt(value)
	if (unit) {
		if (/s$/.test(value)) return value
		return value > 30 ? `${value}ms` : `${value}s`
	}
	if (/ms$/.test(value)) return valueNum
	if (/s$/.test(value)) return valueNum > 30 ? valueNum : valueNum * 1000
	return valueNum
}

/**
 * @description 
 * @param {String} value 
 */
function padZero(value) {
	return `00${value}`.slice(-2)
}

/**
 * @description 
 * @param {*} event
 */
function formValidate(instance, event) {
	const formItem = uni.$u.$parent.call(instance, 'u-form-item')
	const form = uni.$u.$parent.call(instance, 'u-form')
	if (formItem && form) {
		form.validateField(formItem.prop, () => {}, event)
	}
}

/**
 * @description
 * @param {object} obj 
 * @param {string} key 
 * @returns {*}
 */
function getProperty(obj, key) {
	if (!obj) {
		return
	}
	if (typeof key !== 'string' || key === '') {
		return ''
	}
	if (key.indexOf('.') !== -1) {
		const keys = key.split('.')
		let firstObj = obj[keys[0]] || {}

		for (let i = 1; i < keys.length; i++) {
			if (firstObj) {
				firstObj = firstObj[keys[i]]
			}
		}
		return firstObj
	}
	return obj[key]
}

/**
 * @description 
 * @param {object} obj 
 * @param {string} key 
 * @param {string} value 
 */
function setProperty(obj, key, value) {
	if (!obj) {
		return
	}
	const inFn = function(_obj, keys, v) {
		if (keys.length === 1) {
			_obj[keys[0]] = v
			return
		}
		// 0~length-1key
		while (keys.length > 1) {
			const k = keys[0]
			if (!_obj[k] || (typeof _obj[k] !== 'object')) {
				_obj[k] = {}
			}
			const key = keys.shift()
			inFn(_obj[k], keys, v)
		}
	}

	if (typeof key !== 'string' || key === '') {

	} else if (key.indexOf('.') !== -1) { 
		const keys = key.split('.')
		inFn(obj, keys, value)
	} else {
		obj[key] = value
	}
}

/**
 * @description 
 */
function page() {
	const pages = getCurrentPages()
	return `/${pages[pages.length - 1]?.route ?? ''}`
}

/**
 * @description 
 */
function pages() {
	const pages = getCurrentPages()
	return pages
}

/**
 * @description 
 * @param {object} props 
 * @param {object} config
 * @param {object} color 
 * @param {object} zIndex
 */
function setConfig({
	props = {},
	config = {},
	color = {},
	zIndex = {}
}) {
	const {
		deepMerge,
	} = uni.$u
	uni.$u.config = deepMerge(uni.$u.config, config)
	uni.$u.props = deepMerge(uni.$u.props, props)
	uni.$u.color = deepMerge(uni.$u.color, color)
	uni.$u.zIndex = deepMerge(uni.$u.zIndex, zIndex)
}

export default {
	range,
	getPx,
	sleep,
	os,
	sys,
	random,
	guid,
	$parent,
	addStyle,
	addUnit,
	deepClone,
	deepMerge,
	error,
	randomArray,
	timeFormat,
	timeFrom,
	trim,
	queryParams,
	toast,
	type2icon,
	priceFormat,
	getDuration,
	padZero,
	formValidate,
	getProperty,
	setProperty,
	page,
	pages,
	setConfig
}
