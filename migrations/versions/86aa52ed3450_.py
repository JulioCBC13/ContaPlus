"""empty message

Revision ID: 86aa52ed3450
Revises: c8222e52d648
Create Date: 2023-02-01 22:33:56.551933

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '86aa52ed3450'
down_revision = 'c8222e52d648'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('balance', schema=None) as batch_op:
        batch_op.add_column(sa.Column('solicitud', sa.String(length=100), nullable=False))
        batch_op.create_unique_constraint(None, ['solicitud'])

    with op.batch_alter_table('impuestos', schema=None) as batch_op:
        batch_op.add_column(sa.Column('solicitud', sa.String(length=100), nullable=False))
        batch_op.create_unique_constraint(None, ['solicitud'])

    with op.batch_alter_table('ingresos', schema=None) as batch_op:
        batch_op.add_column(sa.Column('solicitud', sa.String(length=100), nullable=False))
        batch_op.create_unique_constraint(None, ['solicitud'])

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('ingresos', schema=None) as batch_op:
        batch_op.drop_constraint(None, type_='unique')
        batch_op.drop_column('solicitud')

    with op.batch_alter_table('impuestos', schema=None) as batch_op:
        batch_op.drop_constraint(None, type_='unique')
        batch_op.drop_column('solicitud')

    with op.batch_alter_table('balance', schema=None) as batch_op:
        batch_op.drop_constraint(None, type_='unique')
        batch_op.drop_column('solicitud')

    # ### end Alembic commands ###
