/**
 * Created by dalei on 17/10/25.
 */

/* 是否是公司邮箱 */
export function isWscnEmail (str) {
  const reg = /^[a-z0-9](?:[-_.+]?[a-z0-9]+)*@wallstreetcn\.com$/i
  return reg.test(str.trim())
}
