function convertDoubleSpaceToSingle(str) {
    // split을사용하여  공백두개를 제거하고 join을사용하여 공백 하나 추가
    return str.split('  ').join(' ');
  }