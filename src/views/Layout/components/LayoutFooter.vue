<template>
    <footer class="app-footer">
        <div class="contact">
            <dl>
                <dt>客户服务</dt>
                <dd>在线客服</dd>
                <dd>问题反馈</dd>
            </dl>
            <dl>
                <dt>关注我们</dt>
                <dd>公众号</dd>
                <dd>微博</dd>
            </dl>
            <dl>
                <dt>服务热线</dt>
                <dd class="hotline">800-0000-000</dd>
            </dl>
        </div>
    </footer>
</template>

<style scoped lang="scss">
.app-footer {
  background-color: #f8f8f8;
  padding: 40px 0;
  font-family: 'Helvetica Neue', sans-serif;
  font-size: 14px;
  color: #555;
  border-top: 1px solid #eaeaea;

  .contact {
    display: flex;
    justify-content: center;
    gap: 170px;
    max-width: 1200px;
    margin: 0 auto;
    flex-wrap: wrap;

    dl {
      display: flex;
      flex-direction: column;
      align-items: flex-start;

      dt {
        font-weight: bold;
        font-size: 16px;
        margin-bottom: 12px;
        color: #333;
      }

      dd {
        margin: 4px 0;
        color: #666;
        cursor: pointer;
        transition: color 0.3s;

        &:hover {
          color: $xtxColor;
        }
      }

      .hotline {
        font-size: 18px;
        font-weight: bold;
      }
    }
  }
}
</style>