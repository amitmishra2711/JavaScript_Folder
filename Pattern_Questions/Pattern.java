public class Pattern{
    public static void main(String[] args) {
        
        int row=5;
        int col=9;

 for(int i=1;i<=row;i++)
        {
            for(int j=0;j<row-i;j++)
            {
                System.out.print(" ");
            }
            for(int j=1;j<=2*i-1;j++)
            {
                System.out.print("*");
            }
            for(int j=0;j<row-i;j++)
            {
                System.out.print(" ");
            }
            System.out.println();
        }
    

        for(int i=0;i<row;i++)
        {
            for(int j=0;j<i;j++)
            {
                System.out.print(" ");
            }
            for(int j=0;j<col-(2*i);j++)
            {
                System.out.print("*");
            }
            for(int j=0;j<i;j++)
            {
                System.out.print(" ");
            }
            System.out.println();
        }

        
    }

}