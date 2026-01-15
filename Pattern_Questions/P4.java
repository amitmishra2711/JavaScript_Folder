public class P4 {
    public static void main(String[] args) {
        int n=5;
        int row=2*n-1;
        for(int i=1;i<=row;i++)
        {
            if(i<n){
            for(int j=1;j<=i;j++)
            {
                System.out.print("* ");
            }
            System.out.println();
        }
            else
            {
                for(int j=1;j<=row-i+1;j++)
            {
                System.out.print("* ");
            }
            System.out.println();
            }
        }
    }
}
