/*
 * @Author: tuWei
 * @Date: 2023-02-12 18:49:16
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2023-02-13 15:18:06
 */

// 快速构建移动端App包 构建前提是下载流水线线上的zip包，所以需要自动部署需要等待流水线包构建完成后使用。
// node main.js -n manage -v v2.0.423
// -n 指定构建名称和版本号即可， manage || puyao 为项目版本号
// -v 后面指定需要发布的版本号，需要在流水线上提前构建出来版本包

const productId = '41e39bfc1a0911ed940db8599fe53f7a';

//云服 node main.js -n manage -v v2.0.423
const manage = {
  name: "H5-Manage-test",
  software_id: 'ed44b65e8e8a40768c9d07bc06a0307f',
}

//普药
const puyao = {
  name: "H5-lonch-puyao-test",
  software_id: 'a09f0f1903d24c2a861152d83ead12e4',
}

// 药发采
const yfc = {
  name: "H5-YFC-test",
  software_id: 'd9ef715c0ce143909fd619aee0778354',
}

//交易标的
const ootfe = {
  name: "H5-lonch-ootfe-test",
  software_id: '73d6f77c6fb8450d9c2e586cf2b60c74',
}

//乐享
const lets = {
  name: "H5-lonch-lexiang-test",
  software_id: '3eca011a464c4b0a924a405addca9276',
}

//乐享管理后台
const letsadmin = {
  name: "H5-lonch-lexiangadmin-test",
  software_id: '2ab9f992a05a45b9a1843f6e2841a1f6',
}

//itoc
const itoc = {
  name: "H5-lonch-itoc-test",
  software_id: '59e26eae4132491aa09aaa61465d1e00',
}

export default {
  manage,
  puyao,
  ootfe,
  itoc,
  lets,
  letsadmin,
  yfc,
  commonUrl:{
    getSign: 'https://test-platform-gateway.lonch.com.cn/osssign/sign/getSign',
    queryAppInnerVersion: 'https://test-platform-gateway.lonch.com.cn/appClient/App/QueryMaxAppInnerVersion',
    saveSoftwareVersion: 'https://test-platform-gateway.lonch.com.cn/appClient/App/SaveSoftwareVersion',
    updateOssUrl: 'https://resources-lonch.oss-cn-beijing.aliyuncs.com',
    queryPagedSoftwareVersion: 'https://test-platform-gateway.lonch.com.cn/appClient/App/QueryPagedSoftwareVersion',
    saveUpdateSettingByStrategyAll: 'https://test-platform-gateway.lonch.com.cn/appClient/App/SaveUpdateSettingByStrategyAll'
  },
  productId,
}