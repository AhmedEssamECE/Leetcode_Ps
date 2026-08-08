class NumMatrix {
    int row, col;
    vector<vector<int>> sums;
public:
    NumMatrix(vector<vector<int>>& matrix) {
      if(matrix[0].size()==0 || matrix.size()==0){
        return;
      }
      int r=matrix.size();
      int c=matrix[0].size();
       sums = vector<vector<int>>(r, vector<int>(c, 0));
       for(int i=0;i<r;i++){
        for(int j=0;j<c;j++){
          int top=(i>0) ? sums[i-1][j]:0;
          int left=(j>0) ? sums[i][j-1]:0;
          int topLeft=(j>0) && (i>0) ? sums[i-1][j-1]:0;

          sums[i][j]=matrix[i][j]+top+left-topLeft;



        }
       }

    }

    
    int sumRegion(int row1, int col1, int row2, int col2) {
        int total=sums[row2][col2];
     int top = (row1 > 0) ? sums[row1 - 1][col2] : 0;
int left = (col1 > 0) ? sums[row2][col1 - 1] : 0;
int topLeft = (row1 > 0 && col1 > 0)
              ? sums[row1 - 1][col1 - 1]
              : 0;

        return total-top-left+topLeft;

    }
};

/**
 * Your NumMatrix object will be instantiated and called as such:
 * NumMatrix* obj = new NumMatrix(matrix);
 * int param_1 = obj->sumRegion(row1,col1,row2,col2);
 */