


export default (props) => {
  if (props?.collapsed) return undefined;
  return (
    <div
      style={{
        textAlign: 'center',
        paddingBlockStart: 12,
      }}
    >
      <div>Copyright © 2023 XiaoHe. All Rights Reserved</div>
    </div>
  );
}